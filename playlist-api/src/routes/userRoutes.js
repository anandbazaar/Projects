const express = require("express");
const {
  loginUser,
  getUsers,
  getUser,
  createUser,
} = require("../controller/userController");
const router = express.Router();
router
  .post("/login", loginUser)
  .get("/users", getUsers)
  .get("/user/:id", getUser)
  .post("/users", createUser);

exports.userRoutes = router;
