const StringDecoder = require('string_decoder').StringDecoder;

const sd = new StringDecoder('utf8');

const buff = Buffer.alloc(20);
buff.write('30 days of code');

console.log(buff);
console.log(sd.write(buff));
