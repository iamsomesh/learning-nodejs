//creating node server

const http = require("http"); //http is global module which I import using require keyword

//createServer is callback/function which takes also a anonymous function for taking a request and send response
const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000) //listen is another function which listen this function also it takes argument as port number where our server is listen and it's optional

//to run this server it - node app.js and hit localhost:3000 in browser to takes incoming request from browser