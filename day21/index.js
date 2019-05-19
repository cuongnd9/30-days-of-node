const buff = Buffer.alloc(20);

console.log(buff);

const length = buff.write('30 days of node');
console.log(length);

console.log(buff.toString('utf8'));

const otherBuff = Buffer.alloc(30);
otherBuff.write(' 21 days');
console.log(Buffer.concat([buff, otherBuff]).toString('utf8'));
