const express = require("express");
const {
  createPlaylist,
  getPlaylist,
} = require("../controller/playlistController");
const router = express.Router();

router
  .get("/Playlists", getPlaylist)
  .post("/Playlists", createPlaylist)
  .put("/Playlists/:id", () => {})
  .delete("/Playlists/:id", () => {});

exports.playlistRoutes = router;
