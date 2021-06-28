import TimeAgo from 'react-timeago'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'
import { useMessagesListStyles } from './MessagesList.style';

export const MessagesListItem = ({ msg, removeMessage }) => {
    const classes = useMessagesListStyles()

    const { messageId, messageText, senderName, createdAt, currentUser } = msg

    const handleRemoveMessage = (id) => {
        removeMessage(id)
    }

    return (
        <ListGroup.Item
            className={currentUser ? classes.myMsg : classes.notMyMsg}
        >
            <Card>
                <Card.Header className={classes.cardHeader}>
                    <Card.Text as={TimeAgo} date={createdAt}/>
                    <Card.Text>{senderName}</Card.Text>
                </Card.Header>
                <Card.Body className={classes.cardBody}>
                    <Card.Text>{messageText}</Card.Text>
                    {currentUser && (
                        <Button
                            variant='none'
                            className={classes.removeBtn}
                            onClick={() => handleRemoveMessage(messageId)}
                        >
                            <AiOutlineDelete/>
                        </Button>
                    )}
                </Card.Body>
            </Card>
        </ListGroup.Item>
    )
}