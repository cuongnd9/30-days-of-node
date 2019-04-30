const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  console.log('Server is listening on 127.0.0.1:6969');
  res.writeHead(200, { 'Content-Type': 'text/json' });
  fs.readFile('data.json', (err, data) => {
    if (err) {
      throw err;
    }
    res.end(data);
  });
}).listen(6969);
