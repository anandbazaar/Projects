const express = require("express");
const { body, validationResult } = require("express-validator");
const port = 3000;
const app = express();
app.get("/", (req, res) => {
  res.send("hello express server");
});
app.use(express.json());
app.post(
  "/user",
  body("username").isEmail(),
  body("password").isLength({ min: 5 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    res.redirect(301, "go-there");
    res.send("validated input you can use it");
  }
);
app.listen(port, () => {
  console.log(`server is running at localhost:${port}`);
});
