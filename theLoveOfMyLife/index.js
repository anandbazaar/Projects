const express = require('express');
const mongoose = require('mongoose');
const connect = require('./db.js')

const port = process.env.port || 3030
const app = express();
app.use(express.json());

connect()
const Us = mongoose.model("Us",{ name:String });

app.get("/",async(req,res)=>{
    const data = await Us.find({});
    res.send(data)
})
app.listen(port, ()=>{
    console.log(`Server is running at localhost${port}`)
})