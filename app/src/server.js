const http = require("http");
const dotenv = require("dotenv");

const hostname = "127.0.0.1";
dotenv.config();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!\n");
});

const port = process.env.PORT;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
