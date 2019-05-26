const validUrl = require("valid-url");
const nanoid = require("nanoid");
const UrlShorten = require("../models/urlShorten.model");

module.exports.index = async (req, res) => {
  const urlCode = req.params.code;
  const item = await UrlShorten.findOne({ urlCode });
  item ? res.redirect(item.originalUrl) : res.redirect("/error");
};

module.exports.post = async (req, res) => {
  const { originalUrl, shortBaseUrl } = req.body;
  if (!validUrl.isUri(shortBaseUrl)) {
    res.status(401).json("Invalid base url");
    return;
  }

  const urlCode = nanoid();
  const updateAt = new Date();
  if (validUrl.isUri(originalUrl)) {
    try {
      const item = await UrlShorten.findOne({ originalUrl });
      if (item) {
        res.status(200).json(item);
      } else {
        shortUrl = shortBaseUrl + "/" + urlCode;
        const item = new UrlShorten({
          originalUrl,
          urlCode,
          shortUrl,
          updateAt
        });

        await item.save();
        res.status(200).json(item);
      }
    } catch (err) {
      res.status(401).json("Invalid user ID");
    }
  } else {
    res.status(401).json("Invalid original url");
  }
};
