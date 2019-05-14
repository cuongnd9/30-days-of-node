const fs = require('fs');
const zlib = require('zlib');

const zip = zlib.createGzip();

const read = fs.createReadStream('info.txt');
const write = fs.createWriteStream('info.txt.gz');

read.pipe(zip).pipe(write);
console.log('Zipped Successfully');
