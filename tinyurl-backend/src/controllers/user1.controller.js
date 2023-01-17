const user1 = require("../models/user1.module");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  const body = new user1(req.body);
  await body.save();
  res.send(body);
};
exports.login = async (req, res) => {
  const { email, pass } = req.body;
  const user = await user1.findOne({ email: email });
  if (user) {
    if (user.pass === pass) {
      const token = jwt.sign(
        { name: user.name, uid: user._id },
        "anandochir" || "default",
        { expiresIn: "1d" }
      );
      res.send(token);
    }
  } else {
    res.status(401).json({ message: "email or password invalid" });
  }
};
