const User = require("../model/user.model.js");
const bcrypt = require("bcrypt");
exports.signUp = async (req, res) => {
  bcrypt.hash(req.body.pass, 10, (err, hash) => {
    User.create({
      username: req.body.username,
      email: req.body.email,
      pass: hash,
    })
      .then((user) => res.send(user))
      .catch((err) => res.send(err));
  });
};
exports.getUser = async (req, res) => {
  const body = await User.find({});
  res.send(body);
};
exports.signIn = async (req, res) => {
  const { username, pass } = req.body;
  const user = await User.findOne({ username: username });
  console.log(user.pass);
  if (user) {
    bcrypt.compare(pass, user.pass, (err, results) => {
      if (results) {
        console.log(results);
        res.send(results);
      } else {
        console.log("asd");
        res.status(401).json({ messege: "email or pass is incorrect" });
      }
    });
  }
};
