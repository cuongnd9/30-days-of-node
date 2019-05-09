const bcrypt = require('bcrypt');

const password = '1234567899';
let hashPassword = '';

bcrypt
  .hash(password, 10)
  .then(hash => {
    hashPassword = hash;
    console.log(hash);
  })
  .then(() => {
    bcrypt
      .compare(password, hashPassword)
      .then(same => console.log(same));
  });
