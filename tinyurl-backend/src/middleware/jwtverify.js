const express = require("express");
const jwt = require("jsonwebtoken");

exports.verify = (req, res, next) => {
  const token = req.headers.authorization;

  console.log(token);

  try {
    const payload = jwt.verify(token, "anandochir" || "defaultsecret");
    console.log(payload.role);
    if (payload.role === "user")
      res.status(401).json({ message: "Unauthorized" });
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
