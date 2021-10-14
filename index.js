const http=require('http');
const path= require('path');
const fs= require('fs');
const server= http.createServer((req,res)=>{
// res.writeHead(200,{"content-type":"text/html"});
// if(req.url==="/"){
//    fs.readFile(path.join(__dirname,"public","index.html"),"utf8",(err,data)=>{
// if (err) throw err;
// res.write(data);
// res.end();
//    });

// }
// if(req.url==="/api/users"){
// const users= [{
//     name:"Bob smith",age:40,
//     name:"john doe",age:30,
// }];
// res.writeHead(200,{"content-type": "application/json"});
// res.write(JSON.stringify(users));
// res.end();
 
//  }

//Build path
let filepath= path.join(__dirname,"public", req.url==="/"? "index.html": req.url);
let extname=path.extname(filepath);
let contentType="text/html";
switch(extname){

    case '.js':
      contentType="text/javascript";
      break;
    case '.css':
      contentType="text/css";
      break;
    case '.json':
      contentType="application/json";
      break;
    case '.png':
      contentType="image/png";
      break;
    case '.jpg':
      contentType="image/jpeg";
      break;
                    
}
fs.readFile(filepath,(err,data)=>{
if(err){
if(err.code="ENOENT"){
    fs.readFile(path.join(__dirname,"public","404.html"),(err,data)=>{
        if(err) throw err;
        res.writeHead(200,{"content-type": "text/html"});
        res.write(data,"utf-8");
        res.end();
    });
}
else{
 res.writeHead(500);
 res.write(`server error : ${err.code}`);
 res.end();
}

}
else{
    res.writeHead(200,{"content-type": contentType})
    res.write(data,"utf-8");
    res.end();
}
});

}).listen(port=process.env.port || 5000,()=>{
console.log("server is running bro");
});