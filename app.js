const express = require('express')
const server = http.createServer(app)
const io = socketio(server)
const http = require('http')
const socketio = require('socket.io')
const gameLogic = require('./game-logic')
const app = express()





io.on('connection', client => {
    gameLogic.initializeGame(io, client)
})


server.listen(8000, ()=> console.log(`Listening on Port 8000`))