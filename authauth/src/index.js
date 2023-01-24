const express = require("express");
const cors = require("cors");
const { connect } = require("./common/db");
const { userRouter } = require("./routes/user.routes");
const { authRouter } = require("./routes/auth.routes");
const app = express();

const port = 3030;

app.use(cors());
app.use(express.json());
app.use(authRouter);

connect();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`server balls ${port}`);
});
