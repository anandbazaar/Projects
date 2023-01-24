const { Schema, model } = require("mongoose");

const User1schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const user1 = model("user1", User1schema);
module.exports = user1;
