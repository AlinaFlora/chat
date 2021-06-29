import { useParams } from 'react-router-dom'
import { useMessages } from '../../hooks'
import { MessageForm } from './MessageForm'
import { MessagesList } from './MessagesList/MessagesList'
import { useRoomStyles } from './Room.style'
import { StyledContainer } from '../../app/App.style'

export function Room() {
    const { roomId } = useParams()
    const { messages, sendMessage, removeMessage } = useMessages(roomId)
    const classes = useRoomStyles()

    return (
        <StyledContainer>
            <h2 className={classes.roomTitle}>Room: {roomId}</h2>
            <MessagesList messages={messages} removeMessage={removeMessage}/>
            <MessageForm sendMessage={sendMessage}/>
        </StyledContainer>
    )
}