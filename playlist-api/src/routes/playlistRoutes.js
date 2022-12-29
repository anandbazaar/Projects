const express = require("express");
const {
  createPlaylist,
  getPlaylist,
  addToPlaylist,
  getPlaylists,
  deletePlaylist,
} = require("../controller/playlistController");
const router = express.Router();

router
  .get("/Playlists", getPlaylists)
  .get("/Playlist/:id", getPlaylist)
  .post("/Playlist", createPlaylist)
  .put("/Playlist/:id", addToPlaylist)
  .delete("/Playlist/:id", deletePlaylist);

exports.playlistRoutes = router;
