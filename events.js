const EventEmitter = require('events');
class myEmitter extends EventEmitter{}
const myemit = new myEmitter();
myemit.on("event", ()=>console.log("events fired"));
myemit.emit("event");