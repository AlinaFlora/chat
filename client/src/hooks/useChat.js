import io from 'socket.io-client'
import { nanoid } from 'nanoid'
import { useEffect, useRef, useState } from 'react'
import { useLocalStorage, useBeforeUnload } from './index'
import { config } from '../config'

export const useChat = (roomId) => {
    const [messages, setMessages] = useState([])
    const [users, setUsers] = useState([])
    const [username] = useLocalStorage('username')
    const [userId] = useLocalStorage('userId', nanoid(8))
    const socketRef = useRef(null)

    useEffect(() => {
        socketRef.current = io(config.SERVER_URL, {
            query: { roomId }
        })

        socketRef.current.emit('user:add', { username, userId })
        socketRef.current.on('users', (users) => {
            setUsers(users)
        })

        socketRef.current.emit('message:get')

        socketRef.current.on('messages', (messages) => {
            const newMessages = messages.map((msg) =>
                msg.userId === userId ? { ...msg, currentUser: true } : msg
            )
            setMessages(newMessages)
        })

        return () => {
            socketRef.current.disconnect()
        }
    }, [roomId, userId, username])

    useBeforeUnload(() => {
        socketRef.current.emit('user:leave', userId)
    })

    const removeMessage = (id) => {
        socketRef.current.emit('message:remove', id)
    }

    const sendMessage = ({ messageText, senderName }) => {
        socketRef.current.emit('message:add', {
            userId,
            messageText,
            senderName
        })
    }

    return { users, messages, sendMessage, removeMessage }
}