const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('👋 Chao Xin'));

app.get('/search', (req, res) => {
  const { q } = req.query;
  res.send(q);
});

app.get('/cats/:id', (req, res) => {
  const { id } = req.params;
  res.send(id);
});

app.listen(8000, () => {
  console.log('Server started on 8000');
});
