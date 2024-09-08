import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"], // Ensure this matches your frontend's origin
        methods: ["GET", "POST"]
    }
});

export const getReciverSocketId = (reciverId) => {
    return userSocketMap[reciverId]
}

const userSocketMap = {}

io.on('connection', (socket) => {
    const userId = socket.handshake.query.userId
    if (userId !== "undefined") {
        userSocketMap[userId] = socket.id
    }
    io.emit('getOnlineUsers', Object.keys(userSocketMap))
    socket.on('disconnect', () => {
        delete userSocketMap[userId]
        io.emit('getOnlineUsers', Object.keys(userSocketMap))
    });
});

export { io, app, server };
