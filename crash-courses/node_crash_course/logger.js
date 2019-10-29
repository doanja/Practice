const EventEmitter = require('events');
const uuid = require('uuid'); // create random uuid

// console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg) {
        // call event
        this.emit('message', {id: uuid.v4(), msg});
    }
}

module.exports = Logger;

// homework: make the message log to a file