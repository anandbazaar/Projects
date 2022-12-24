const song = require("../models/songModel");

exports.createSong = async (req, res) => {
  const body = new song(req.body);
  await body.save();
  res.send("created");
};
exports.getSong = async (req, res) => {
  const id = req.query.playlistId;
  if (id) {
    console.log(id);
    const result = await song.find({ playlistId: id });
    return res.send(result);
  }
  const result = await song.find({});
  res.send(result);
};
