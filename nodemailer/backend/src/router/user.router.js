const express = require("express");
const { getUser, signUp, signIn } = require("../controller/user.controller");
const userRouter = express.Router();

userRouter
  .get("/users", getUser)
  .post("/signup", signUp)
  .post("/signin", signIn);

module.exports = userRouter;
