const https= require('http');
https.createServer((req,res)=>{
res.writeHead(200,{"content-type":"text/plain"});
res.write("I am a successful Mern stack developer and a ui/ux designer. very good one");
res.end();
}).listen(8080);