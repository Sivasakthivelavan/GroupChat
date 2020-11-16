const express=require('express');
const app=express();
const path = require('path');
const http=require('http');
const socketio=require('socket.io');
const server = http.createServer(app);
const io = socketio(server);
const PORT = 3000 || process.env.PORT;

app.use(express.static(path.join(__dirname,'public')));

io.on('connection',socket=>{
    console.log('New client conncted');
    socket.on('new-client',message=>{
        socket.broadcast.emit('client',message);
    })
})

server.listen(PORT,()=>{
    console.log('Server started');
})
