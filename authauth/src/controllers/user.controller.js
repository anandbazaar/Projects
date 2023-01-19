const { User } = require("../models/user.model");

exports.getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.send(error);
  }
};

exports.createUser = async (req, res) => {
  const { username, password, email } = req.body || {};

  if (!username || !password || !email)
    return res.status(401).send("username pass email required");
  try {
    const user = new User({ username, password, email });
    await user.save();
  } catch (error) {
    res.send(error);
  }
};
