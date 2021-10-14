const url= require('url');
const murls= new URL("http:/mywebsite.com:8080/hello.html?id=100&status=active");
// // console.log(murls.href);
// // console.log(murls.pathname);
// //  console.log(murls.host); 
// //  console.log(murls.toString()); 
// //  console.log(murls.pathname); 
// //  console.log(murls.port); 
// console.log(murls.search); 
murls.searchParams.forEach(( name,value)=>console.log(`${value} ${name}`)); ;

