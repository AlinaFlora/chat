const server = require('http').createServer();
const registerMessageHandlers = require('./handlers/messageHandlers');
const registerUserHandlers = require('./handlers/userHandlers');
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"],
    transports: ['websocket', 'polling'],
    credentials: true
  },
  allowEIO3: true
});

const onConnection = (socket) => {
  const { roomId } = socket.handshake.query;
  socket.roomId = roomId;
  socket.join(roomId);
  registerMessageHandlers(io, socket)
  registerUserHandlers(io, socket)

  socket.on('disconnect', () => {
    socket.leave(roomId)
  })
};

io.on('connection', onConnection);
const PORT = process.env.PORT || 5000;
server.listen(PORT);