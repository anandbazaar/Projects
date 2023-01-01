const { Schema, Types, model } = require("mongoose");
const songSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
const song = model("song", songSchema);
module.exports = song;
