/**
 * Basic example for express server
 */
const express = require("express");

const app = express();
const port = 4004;

// GET -> localhost:4004/
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// GET localhost:4004/users
app.get("/users", (req, res) => {
  res.send("Hello Users!");
});

app.post("/users", (req, res) => {
  res.json({ message: "Message posted" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
