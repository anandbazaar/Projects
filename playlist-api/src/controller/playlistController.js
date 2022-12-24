const playlist = require("../models/playlistModel");

exports.createPlaylist = async (req, res) => {
  const body = new playlist(req.body);
  await body.save();
  res.send("created");
};

exports.getPlaylist = async (req, res) => {
  const data = await playlist.find({});
  res.send(data);
};
