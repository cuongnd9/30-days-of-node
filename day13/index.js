const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('./models/User');

const app = express();

const port = 8000;

mongoose.connect('mongodb://localhost:27017/30-days-of-code', {
  useNewUrlParser: true
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  return res.redirect('index.html');
});

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({
    name,
    email,
    password: bcrypt.hashSync(password, 10)
  });
  await user.save();
  res.redirect('success.html');
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
