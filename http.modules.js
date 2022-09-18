const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Your in Home page");
    return;
  }
  if (req.url === "/about") {
    res.end("Your in About page");
    return;
  }
  res.end(`
    <h1>oops!</h1>
    <p>We don't have this page</p>
    <a href="/">Back to home</a>`);
});

server.listen(5000);
