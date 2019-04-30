const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    console.log('Server is listening on 127.0.0.1:6969');
    res.writeHead(200, { 'Content-Type': 'audio/mp3' });
    const path = './asset/Anh-Oi-O-Lai-Chi-Pu.mp3';
    fs.exists(path, exists => {
      if (exists) {
        const rstream = fs.createReadStream(path);
        rstream.pipe(res);
      } else {
        res.end('404');
      }
    });
  })
  .listen(6969);
