import { ListGroup } from 'react-bootstrap'
import { Button, Card, Typography } from "@material-ui/core"
import { AiOutlineDelete } from 'react-icons/ai'
import { useMessagesListStyles } from './MessagesList.style';

export const MessagesListItem = ({ message, removeMessage }) => {
    const classes = useMessagesListStyles()

    const { messageId, messageBody, currentUser } = message

    return (
        <ListGroup.Item
            className={currentUser ? classes.myMsg : classes.notMyMsg}
        >
            <Card className={currentUser ? classes.myMsgCard : classes.notMyMsgCard}>
                <div className={classes.cardBody}>
                    <Typography color="white" gutterBottom>
                        {messageBody}
                    </Typography>
                    {currentUser && (
                        <Button
                            variant='none'
                            className={classes.removeBtn}
                            onClick={() => removeMessage(messageId)}
                        >
                            <AiOutlineDelete/>
                        </Button>
                    )}
                </div>
            </Card>
        </ListGroup.Item>
    )
}