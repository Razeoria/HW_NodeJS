import EventEmitter from 'node:events';

const emitter = new EventEmitter();

emitter.on('message', ({ username, message }) => {
  console.log(`${username}: ${message}`);
});

const sendMessage = emitter.emit.bind(emitter, 'message');

export default sendMessage;
