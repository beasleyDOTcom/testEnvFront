const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

socket.on('connected', (payload) => {
    console.log('connected on: ', payload)
    setTimeout(() => {
        socket.emit('new-game', {participants: ['cullen', 'lauren', 'megan', 'beasley', 'jana', 'christie', 'collin', 'allie'], cards:['test1', 'test2', 'test3', 'test4', 'test5']})
    }, 3000)
})

