const url = require('../models/url.module')

exports.getUrls = async (req,res) =>{
    const body = await url.find({})
    console.log(body)
    res.send( body)
};
exports.makeUrl = async (req,res) =>{
    const body = new url(req.body)
    await body.save();
    res.send('made')
}
exports.redirect = async (req,res) =>{
    const body = await url.find({tinyUrl : "http://localhost:3000/" + req.params.id})
    res.send(body)
}