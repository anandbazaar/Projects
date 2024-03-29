const url = require("../models/url.module");

exports.getUrls = async (req, res) => {
  const page = req.query.page - 1;
  console.log(page);
  const body = await url
    .find({
      createdBy: req.query.id,
    })
    .limit(5)
    .skip(page * 5);

  res.send(body);
};
exports.makeUrl = async (req, res) => {
  const body = new url(req.body);
  await body.save();
  res.send("made");
};
exports.redirect = async (req, res) => {
  const body = await url.find({
    tinyUrl: "http://localhost:3030/myurl/" + req.params.id,
  });
  res.redirect(body[0].longUrl);
};
