const express = require("express");
const { createSong, getSong } = require("../controller/songController");
const router = express.Router();

router
  .get("/songs", getSong)
  .post("/songs", createSong)
  .put("/songs/:id", () => {})
  .delete("/songs/:id", () => {});

exports.songRoutes = router;
