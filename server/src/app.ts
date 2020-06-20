import express from 'express'
import socketio from 'socket.io'
import http from 'http'
import router from '../router'

const PORT = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(router)

server.listen(PORT, () => console.log('RUNNING'))
