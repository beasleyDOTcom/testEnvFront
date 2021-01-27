'use strict';
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const Circular = require('../../../codefellows/data-structures-and-algorithms/post-graduion/linked-list/circularly-linked-list/circularlyLinkedList');

io.on('connection', (socket) => {
    console.log('a user has connected: ', socket.id);

    socket.emit('connected', socket.id);

    socket.on('new-game', (payload) => {
        const participants = new Circular();
        payload.participants.forEach(person => {
            participants.addPlayer(person)
            console.log(participants)
        }) // need to manage decks of cards
    })



    socket.on('disconnect', () => {
        console.log(socket.id, ' just disconnected')
    })
})

http.listen(3000, () => {
    console.log('listening on: ', 3000)
})