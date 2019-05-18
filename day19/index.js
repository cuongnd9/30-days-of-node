const qs = require('querystring');

const jsonValue = qs.parse('id=1&name=cuongw');
console.log(jsonValue);

console.log(qs.stringify(jsonValue));
