const fs = require('fs');

const data = '30 days of code';

const writeStream = fs.createWriteStream('info.txt');
writeStream.write(data);
writeStream.end();
