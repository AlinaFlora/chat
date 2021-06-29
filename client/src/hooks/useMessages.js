import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import { nanoid } from 'nanoid'
import { useLocalStorage } from './index'
import { config } from '../config'

export const useMessages = (roomId) => {
    const [messages, setMessages] = useState([])
    const [userId] = useLocalStorage('userId', nanoid(8))
    const socketRef = useRef(null)

    useEffect(() => {
        socketRef.current = io(config.SERVER_URL, { query: { roomId }})
        socketRef.current.on(config.NEW_MESSAGE, (messages) => {
            const messagesIncomes = messages.map((message) =>{
                const isCurrentUserOwning = message.userId === userId
                     return  isCurrentUserOwning ? { ...message, currentUser: true } : message
        })
            setMessages(messagesIncomes)
        })
        socketRef.current.emit(config.GET_MESSAGE)
        return () => {
            socketRef.current.disconnect()
        }
    }, [roomId, userId])


    const removeMessage = (messageId) => {
        socketRef.current.emit(config.REMOVE_MESSAGE, messageId)
    }

    const sendNewMessage = ({ messageBody: messageContent }) => {
        socketRef.current.emit(config.ADD_MESSAGE, { userId, messageBody: messageContent })
    }

    return { messages, sendMessage: sendNewMessage, removeMessage }
}