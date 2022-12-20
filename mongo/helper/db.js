const mongoose = require("mongoose");
const url =
  "mongodb+srv://anand:anandochir@cluster0.xiavtby.mongodb.net/?retryWrites=true&w=majority";
const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connect;
