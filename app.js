//creating node server

const http = require("http"); //http is global module which I import using require keyword

//createServer is callback/function which takes also a anonymous function for taking a request and send response
const server = http.createServer((req, res) => {
  // console.log(req);
  
  console.log(req.url, req.method, req.headers)//let's o/p request url, method and header

  //send response to server
  res.setHeader('Content-Type', 'text/html'); //setHeader method send response into header
  res.write('<html>'); //write some data to response
  res.write('<head><title>my first page</title></head>');
  res.write('<body><h1>This is my first node js application response</h1></body>');
  res.write('</html>');

});

server.listen(3000) //listen is another function which listen this function also it takes argument as port number where our server is listen and it's optional

//to run this server it - node app.js and hit localhost:3000 in browser to takes incoming request from browser