const http= require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type': 'text/plain'});
    res.write("I am a Mern stack Developer");
    res.end();
})
.listen(8081,()=>console.log("server running"));