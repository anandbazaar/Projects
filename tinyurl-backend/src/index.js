const express = require("express");
const cors = require("cors");
const connect = require("./db");
const { urlRouter } = require("./routes/url.routes");
const { user1Router } = require("./routes/user1.routes");
require("dotenv").config();

const app = express();
const port = process.env.port || 3050;

app.use(cors());
app.use(express.json({ limit: "2MB" }));
app.use(urlRouter);
app.use(user1Router);

connect();

app.listen(port, () => {
  console.log(`Server is listening on localhost:${port}`);
});
