const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

socket.on('connected', (payload) => {
    console.log('connected on: ', payload)
    setTimeout(() => {
        socket.emit('new-game', {participants: ['cullen', 'lauren', 'megan', 'beasley', 'jana', 'christie', 'collin', 'allie'], cards:['test1', 'test2', 'test3', 'test4', 'test5']})
    }, 3000)

})

// I think you want to have a useEffect? looking for an update to state to re render
// a event gets emitted from clientA saying "I changed the state-- this is what it looks like now" -- payload
// the server emits a message to all participants in the room but the sender -- state changed -- this is it
// etc. 