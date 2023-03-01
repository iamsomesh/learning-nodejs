const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (req.url === '/'){
    res.write('<html>');
    res.write('<head><title>input form</title></head>');
    res.write('<body><form action = "/message" method = "POST"><input type = "text" name = "name"><button type = "submit">send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  //redirecting request
  if (url === '/message' && method === 'POST'){
    fs.writeFileSync('message.txt', 'Dumy data'); //handling file using core module 'fs'
    res.statusCode = 302;
    res.setHeader('Location', '/'); //redirecting
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>my first page</title></head>');
  res.write('<body><h1>This is my first node js application response</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3009)