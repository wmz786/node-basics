const http = require("node:http");

// using event emitter api
const server = http.createServer();

// emits request event
// respond to it
server.on("request", (req, res) => {
  res.end("welcome");
});

server.listen(5000);
