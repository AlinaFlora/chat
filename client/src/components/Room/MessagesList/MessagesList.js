import { useEffect, useRef } from 'react'
import { ListGroup } from 'react-bootstrap'
import { MessagesListItem } from './MessagesListItem'
import { useMessagesListStyles } from './MessagesList.style'

export const MessagesList = ({ messages, removeMessage }) => {
    const classes = useMessagesListStyles()
    const messagesEndRef = useRef(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }, [messages])

    return (
        <>
            <ListGroup variant='flush' className={classes.listGroup}>
                {messages.map((msg) => (
                    <MessagesListItem
                        key={msg.messageId}
                        msg={msg}
                        removeMessage={removeMessage}
                    />
                ))}
                <span ref={messagesEndRef}></span>
            </ListGroup>
        </>
    )
}