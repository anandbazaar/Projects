const express = require("express");
const { createUser, login } = require("../controllers/user1.controller");
const router = express.Router();

router.post("/signup", createUser).post("/login", login);

exports.user1Router = router;
