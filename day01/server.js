const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
const port = '6969';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello Node!');
  res.end();
});

server.listen(port, host, err => {
  if (err) {
    return console.log('Server error!!!');
  }
  console.log(`Server is listening on ${host}:${port}`);
});
