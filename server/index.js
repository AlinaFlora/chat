const useMessageHandlers = require('./handlers/messageHandlers');
const server = require('http').createServer();

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"],
    transports: ['websocket', 'polling'],
    credentials: true
  },
  allowEIO3: true
});

const config = {
  DISCONNECT: 'disconnect',
  CONNECT: 'connection'
}
const PORT = process.env.PORT || 5000;

io.on(config.CONNECT, function (socket)  {
  socket.roomId = socket.handshake.query;
  socket.join(socket.handshake.query);
  useMessageHandlers(io, socket)

  socket.on(config.DISCONNECT, () => {
    socket.leave(socket.roomId )
  })
}
);
server.listen(PORT);