const { Router } = require("express");
const { getUser, createUser } = require("../controllers/user.controller");
const { authMiddleware } = require("../middleware/auth.middleware");

exports.userRouter = Router()
  .get("/users", authMiddleware, getUser)
  .post("/users", createUser);
