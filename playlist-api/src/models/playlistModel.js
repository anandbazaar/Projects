const { Schema, Types, model } = require("mongoose");
const playlistSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  isPrivate: {
    type: Boolean,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  songs: [{ type: Schema.Types.ObjectId, ref: "song" }],
});
const playlist = model("Playlist", playlistSchema);
module.exports = playlist;
