const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    console.log('Server is listening on 127.0.0.1:6969');
    res.writeHead(200, { 'Content-Type': 'audio/mp4' });
    const path = './asset/Anh-Oi-O-Lai-Chi-Pu.mp4';
    fs.exists(path, exists => {
      if (exists) {
        const rstream = fs.createReadStream(path);
        rstream.pipe(res);
      } else {
        res.send('404');
        res.end();
      }
    });
  })
  .listen(6969);
