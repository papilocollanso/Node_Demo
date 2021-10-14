const EventEmitter= require("events");
const uu= require("uuid");
class Logger extends EventEmitter{
    log(msg){
    this.emit("messgae",{id:uu.v4(), msg});
}
}
module.exports=Logger;