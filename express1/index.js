const express = require("express");

const port = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("hello express server");
});

app.listen(port, () => {
  `server is running at localhost:${port}`;
});
