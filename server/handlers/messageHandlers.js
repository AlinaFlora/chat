const { nanoid } = require('nanoid')
const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const messagesDB = new FileSync('db/messages.json')
const db = lowdb(messagesDB)

const config = {
    ALL_MESSAGES: 'messages',
    ADD_MESSAGE: 'message:add',
    REMOVE_MESSAGE: 'message:remove',
    GET_MESSAGE: 'message:get',
}

module.exports = (io, socket) => {
    const getAllMessages = () => {
        io.in(socket.roomId).emit(config.ALL_MESSAGES,  db.get(config.ALL_MESSAGES).value())
    }

    const removeMessage = (messageId) => {
        db.get(config.ALL_MESSAGES).remove({ messageId }).write()
        getAllMessages()
    }

    const addNewMessage = (message) => {
        db.get(config.ALL_MESSAGES).push({
                messageId: nanoid(8),
                ...message
            }).write()
        getAllMessages()
    }

    socket.on(config.GET_MESSAGE, getAllMessages)
    socket.on(config.ADD_MESSAGE, addNewMessage)
    socket.on(config.REMOVE_MESSAGE, removeMessage)
}