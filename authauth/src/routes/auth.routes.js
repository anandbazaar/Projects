const { Router } = require("express");
const { signup, login } = require("../controllers/auth.controller");
const { getUser, createUser } = require("../controllers/user.controller");

exports.authRouter = Router().post("/signup", signup).post("/signin", login);
