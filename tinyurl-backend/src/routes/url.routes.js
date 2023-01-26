const express = require("express");
const { getUrls, makeUrl, redirect } = require("../controllers/url.controller");
const { verify } = require("../middleware/jwtverify");
const router = express.Router();
router
  .get("/myurl", getUrls)
  .post("/tiny", makeUrl)
  .get("/myurl/:id:page", redirect);

exports.urlRouter = router;
