const mongoose = require('mongoose')
require("dotenv").config();

const uri = 'mongodb+srv://anand:anandochir@cluster0.xiavtby.mongodb.net/?retryWrites=true&w=majority'

const connect = async () => {
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect(uri);
        console.log("connected");
    }catch (err) {
        throw new Error(err.message);
    }
}
module.exports = connect