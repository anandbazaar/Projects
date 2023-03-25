const express = require("express");
const connect = require("./db");
const cors = require("cors");
const userRouter = require("./router/user.router");

const app = express();
const port = 3030;

app.use(cors());
app.use(express.json({ limit: "2MB" }));
app.use(userRouter);

connect();
app.listen(port, () => {
  console.log(`server is listening on localhost://${port}`);
});
