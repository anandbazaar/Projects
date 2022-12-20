const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connect = require("./helper/db.js");
const { body } = require("express-validator");

const port = 8080;
const app = express();

app.use(express.json());
app.use(cors());
connect();
const Cat = mongoose.model("Cat", { name: String });

app.get("/cats", async (req, res) => {
  const data = await Cat.find({});
  res.send(data);
});
app.post("/cats", async (req, res) => {
  const name = req.body;
  const kitty = new Cat(name);
  await kitty.save();
  res.send("meow");
});
app.get("/", async (req, res) => {
  res.send("hello");
});
app.put("/cats/:id", async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  const cat = await Cat.findByIdAndUpdate(
    id,
    { name: "nohoin gulug" },
    { new: true }
  );
  res.send("catched");
});
app.delete("/cats/:id", async (req, res) => {
  const id = req.params.id;
  await Cat.deleteOne({ _id: id });
  res.send("deleted");
});
app.listen(port, () => {
  `Server is running at localhost${port}`;
});
