import { useParams } from 'react-router-dom'
import { useLocalStorage, useChat } from '../../hooks'
import { MessageForm } from './MessageForm'
import { MessagesList } from './MessagesList/MessagesList'
import { UsersList } from './UsersList/UsersList'
import { useRoomStyles } from './Room.style'
import { StyledContainer } from '../../app/App.style'

export function Room() {
    const [username] = useLocalStorage('username')
    const { roomId } = useParams()
    const { users, messages, sendMessage, removeMessage } = useChat(roomId)
    const classes = useRoomStyles()

    return (
        <StyledContainer>
            <h2 className={classes.roomTitle}>Room: {roomId}</h2>
            <UsersList users={users}/>
            <MessagesList messages={messages} removeMessage={removeMessage}/>
            <MessageForm username={username} sendMessage={sendMessage}/>
        </StyledContainer>
    )
}