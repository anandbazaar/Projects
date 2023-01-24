const express = require("express");
const {
  createUser,
  login,
  getUsers,
} = require("../controllers/user1.controller");
const { verify } = require("../middleware/jwtverify");
const router = express.Router();

router
  .post("/signup", createUser)
  .post("/login", login)
  .get("/users", verify, getUsers);

exports.user1Router = router;
