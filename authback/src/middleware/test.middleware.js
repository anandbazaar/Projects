const express = require("express");
const jwt = require("jsonwebtoken");

exports.verify = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  jwt.verify(token, "anandochir" || "defaultsecret", (err, result) => {
    if (err) res.send(err);
    return result;
  });
  next();
};
