const mongo = require("mongoose");
const URI =
  "mongodb+srv://anand:anandochir@cluster0.xiavtby.mongodb.net/?retryWrites=true&w=majority";
const connect = async () => {
  try {
    mongo.set("strictQuery", false);
    await mongo.connect(URI);
    console.log("connected");
  } catch (err) {
    throw new Error(err.message);
  }
};
module.exports = connect;
