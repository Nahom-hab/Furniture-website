import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import path from 'path'
import { fileURLToPath } from 'url';

import authRouter from './routes/auth.route.js';
import productRouter from './routes/product.route.js';

import { app, server } from './socket/socket.js';

// Load environment variables
dotenv.config();

// Middleware setup
app.use(cookieParser());


// Database connection without deprecated options
mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log('Database connection error:', err);
    });

//to get the absolut path to our backend
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors());
app.use(express.json())



// Routes
app.use('/api/auth', authRouter);
app.use('/api/product', productRouter);



app.use(express.static(path.join(__dirname, '/frontend/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/dist/index.html'))
})
// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

// Start the server
server.listen(4000, () => {
    console.log("Server is running on port 4000");
});
