const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => io.emit('chat message', msg));
});
server.listen(5000, () => console.log('Chat on 5000'));
