const fs=require('fs');
const path=require("path");
//create folder
// fs.mkdir(path.join(__dirname,"/test"),err=>{
//     if(err) throw err;
//     console.log("folder created");
// });

//create and write file
// fs.writeFile(path.join(__dirname,"/test","hello.txt"), "Helo world",err=>{
//     if (err) throw err;
//     console.log("file created");
// });

// fs.appendFile(path.join(__dirname,"/test","hello.txt"), "i love node js",err=>{
//     if (err) throw err;
//     console.log("file written to");
// });

// fs.readFile
// Read file

// fs.readFile(path.join(__dirname,"/test","hello.txt"), 'utf8',(err, data)=>{


// console.log(data);
// });

// //Rename file
// fs.rename(path.join(__dirname,"/test","hello.txt"),path.join(__dirname,"/test","helloworld.txt"),(err,data)=>{
//     if(err) throw err;
//     console.log("file renamed");
// });
// fs.unlink(path.join(__dirname,"test","helloworldss.txt"),(err)=>{
// if(err){
//     throw err;
// }
// console.log("file deleted");
// });