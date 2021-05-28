/**
 * This is example file showing how to create http server with built in modules.
 */


const http = require("http");
// const dotenv = require("dotenv");

const hostname = "127.0.0.1";
// dotenv.config();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Welcome to Node.js Session!\n");
});

// const port = process.env.PORT;
const port = 4001;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
