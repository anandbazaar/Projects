const jwt = require("jsonwebtoken");
exports.generateJWT = async (req, res) => {
  const token = jwt.sign(
    { email: req.body.email, pass: req.body.pass },
    "anandochir" || "defaultsecret",
    { expiresIn: "1d" }
  );
  res.send(token);
};
exports.showtoken = async (req, res) => {
  res.send("hello");
};
