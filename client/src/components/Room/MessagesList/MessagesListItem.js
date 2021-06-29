import { ListGroup } from 'react-bootstrap'
import { Button, Card, Typography } from "@material-ui/core"
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
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
                    {currentUser && (
                        <Button
                            variant='none'
                            className={classes.removeBtn}
                            onClick={() => removeMessage(messageId)}
                        >
                            <DeleteOutlinedIcon/>
                        </Button>
                    )}
                    <Typography color="white" gutterBottom>
                        {messageBody}
                    </Typography>
                </div>
            </Card>
        </ListGroup.Item>
    )
}