const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === '/'){
    res.write('<html>');
    res.write('<head><title>input form</title></head>');
    res.write('<body><form action = "/message" method = "POST"><input type = "text" name = "name"><button type = "submit">send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>my first page</title></head>');
  res.write('<body><h1>This is my first node js application response</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000)