const express = require("express");
const { generateJWT, showtoken } = require("../controller/test.controller");
const { verify } = require("../middleware/test.middleware");
const router = express.Router();

router.post("/", generateJWT).get("/data", verify, showtoken);
exports.testRouter = router;
