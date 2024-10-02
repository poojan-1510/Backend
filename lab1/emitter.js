// emitter.js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
  // You can add custom methods here if needed
}

const myEmitter = new MyEmitter();

myEmitter.on('customEvent', () => {
  console.log('Custom event was emitted!');
});

module.exports = myEmitter;

