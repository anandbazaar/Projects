const jwt = require("jsonwebtoken");
exports.authMiddleware = (req, res, next) => {
  const token = req.headers.authorization ?? null;
  const { username, password } = req.body;
  if (!token) return res.send("invalid token");

  const payload = jwt.verify(token, "anandochir");
  if (!payload) {
    return res.send("unauthorized");
  }
  next();
};
