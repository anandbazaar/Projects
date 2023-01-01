const playlist = require("../models/playlistModel");

exports.createPlaylist = async (req, res) => {
  const body = new playlist(req.body);
  await body.save();
  res.send("created");
};

exports.getPlaylists = async (req, res) => {
  const playlistId = req.params.id;
  const data = await playlist.find({}).populate("songs");
  res.send(data);
};
exports.getPlaylist = async (req, res) => {
  const playlistId = req.params.id;
  const data = await playlist.findById(playlistId).populate("songs");
  res.send(data);
};
exports.addToPlaylist = async (req, res) => {
  const PlaylistId = req.params.id;
  const songId = req.query.id;
  const data = await playlist.findById(PlaylistId);
  data.songs.push(songId);
  await data.save();
  res.send(data);
};
exports.deletePlaylist = async (req, res) => {
  await playlist.deleteOne({ _id: req.params.id });
  res.send("deleted");
};
