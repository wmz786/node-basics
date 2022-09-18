const http = require("node:http");

const server = http.createServer((req, res) => {
  res.write("welcome to my home page");
  res.end();
});

server.listen(5000);
