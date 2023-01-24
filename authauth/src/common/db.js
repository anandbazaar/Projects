const mongoose = require("mongoose");
require("dotenv").config();

const uri =
  "mongodb+srv://anand:anandochir@cluster0.xiavtby.mongodb.net/?retryWrites=true&w=majority";
const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri);
    console.log("connected");
  } catch (error) {
    throw new Error(error.messege);
  }
};

exports.connect = connect;
