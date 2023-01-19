const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { username, password, email } = req.body || {};

  if (!username || !password || !email)
    return res.status(401).send("username pass email required");
  try {
    const user = new User({ username, password, email });
    await user.save();
    res.send("signedup");
  } catch (error) {
    res.send(error);
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password)
    return res.status(401).send("username pass email required");

  try {
    const user = User.findOne({ username });
    const token = jwt.sign({ username, password }, "anandochir", {
      expiresIn: "1d",
    });
    if (password === user.password) res.send(token);
  } catch (err) {
    throw res.send("user not found");
  }
};
