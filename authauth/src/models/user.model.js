const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  role: String,
  username: String,
  password: String,
  email: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = model("User2", userSchema);

exports.User = User;
