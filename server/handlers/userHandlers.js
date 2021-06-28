const users = {
    1: { username: 'Alina', online: false },
    2: { username: 'David', online: true }
}

module.exports = (io, socket) => {
    const getUsers = () => {
        io.in(socket.roomId).emit('users', users)
    }

    const removeUser = (userId) => {
        users[userId].online = false
        getUsers()
    }

    const addUser = ({ username, userId }) => {
        if (!users[userId]) {
            users[userId] = { username, online: true }
        } else {
            users[userId].online = true
        }
        getUsers()
    }

    socket.on('user:get', getUsers)
    socket.on('user:leave', removeUser)
    socket.on('user:add', addUser)
}