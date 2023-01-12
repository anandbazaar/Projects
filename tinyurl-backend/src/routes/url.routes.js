const express = require("express");
const { getUrls, makeUrl, redirect } = require("../controllers/url.controller");
const router = express.Router();
router
  .get("/myurl", getUrls)
  .post("/tiny", makeUrl)
  .get("/myurl/:id", redirect);

exports.urlRouter = router;
