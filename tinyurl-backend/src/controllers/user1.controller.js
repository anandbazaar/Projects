const user1 = require("../models/user1.module");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  // const body = new user1(req.body);
  // await body.save();
  bcrypt.hash(req.body.pass, 10, (error, hash) => {
    user1
      .create({
        name: req.body.name,
        email: req.body.email,
        pass: hash,
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(401).send(error));
  });
};
exports.login = async (req, res) => {
  const { email, pass } = req.body;
  const user = await user1.findOne({ email: email });
  if (user) {
    bcrypt.compare(pass, user.pass, (error, result) => {
      if (result) {
        const token = jwt.sign(
          { name: user.name, uid: user._id, role: user.role },
          "anandochir" || "default",
          { expiresIn: "1d" }
        );
        res.send(token);
      } else {
        res.status(401).json({ message: "email or password invalid" });
      }
    });
  }
};
exports.getUsers = async (req, res) => {
  const body = await user1.find({});
  res.send(body);
};
