const express = require("express");
const cors = require("cors");
const { testRouter } = require("./router/test.router");

const app = express();
const port = 3030;

app.use(express.json());
app.use(cors());
app.use(testRouter);

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
