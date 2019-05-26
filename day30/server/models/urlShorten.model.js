const mongoose = require("mongoose");
const { Schema } = mongoose;

const UrlShortenSchema = new Schema({
  originalUrl: String,
  urlCode: String,
  shortUrl: String,
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date, default: Date.now() }
});

const UrlShorten = mongoose.model("UrlShorten", UrlShortenSchema);

module.exports = UrlShorten;
