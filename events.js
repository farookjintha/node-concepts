const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', (msg) => {
    console.log("Event is triggered: ", msg)
});


eventEmitter.emit('start', "Hello");

eventEmitter.listeners()