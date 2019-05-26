require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const apiRoute = require("./routes/api.route");

const app = express();

const port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-type,Accept,x-access-token,X-Key"
  );
  if (req.method == "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

app.get("/", (req, res) => res.send('<h2 style="color: green">Chao Xin!</h2>'));
app.get("/error", (req, res) => res.send('<h2 style="color: red">Error</h2>'));
app.use("/api", apiRoute);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
