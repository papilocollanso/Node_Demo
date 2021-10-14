const Logger= require('./logger');
const logger= new Logger();
logger.on("messgae",data=>console.log('called Listener', data));
logger.log("hello world");