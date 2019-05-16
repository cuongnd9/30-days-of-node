require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');

const apiCatRoute = require('./api/routes/cat.route');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.json({ message: 'chao xin! welcome to my restful api!' });
});

app.use('/api/cats', apiCatRoute);
app.use((req, res) => {
  res.status(404).json({ url: req.originalUrl + ' not found' });
});

app.listen(port, () =>
  console.log(chalk.bgRed(`app is listening on port ${port}`))
);
