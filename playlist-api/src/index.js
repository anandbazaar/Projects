const express = require("express");
const cors = require("cors");
const connect = require("./db");
const { playlistRoutes } = require("./routes");
const { songRoutes } = require("./routes");

const port = process.env.PORT || 3030;
const app = express();

app.use(express.json({ limit: "20MB" }));
app.use(cors());
app.use(playlistRoutes);
app.use(songRoutes);

connect();

app.get("/", async (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Server is listening on localhost:${port}`);
});
