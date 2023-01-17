const express = require("express");
const { getUrls, makeUrl, redirect } = require("../controllers/url.controller");
const { verify } = require("../middleware/jwtverify");
const router = express.Router();
router
  .get("/myurl", verify, getUrls)
  .post("/tiny", verify, makeUrl)
  .get("/myurl/:id", redirect);

exports.urlRouter = router;
