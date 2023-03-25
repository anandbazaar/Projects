const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
  },
  pass: {
    type: String,
  },
  email: {
    type: String,
  },
});
const User = model("userunread", userSchema);
module.exports = User;
