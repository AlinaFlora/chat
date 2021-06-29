import { ListGroup } from 'react-bootstrap'
import { MessagesListItem } from './MessagesListItem'
import { useMessagesListStyles } from './MessagesList.style'

export const MessagesList = ({ messages, removeMessage }) => {
    const classes = useMessagesListStyles()

    return (
        <>
            <ListGroup variant='flush' className={classes.listGroup}>
                {messages.map((message) => (
                    <MessagesListItem
                        removeMessage={removeMessage}
                        key={message.messageId}
                        message={message}
                    />
                ))}
            </ListGroup>
        </>
    )
}