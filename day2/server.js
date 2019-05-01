const fs = require('fs');

// READ FILE
fs.readFile('./data/song1.txt', { encoding: 'utf8' }, (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

const songLyric = fs.readFileSync('./data/song1.txt', { encoding: 'utf8' });
console.log(songLyric);

// WRITE FILE
fs.writeFile('./data/song2.txt', '30 Days of Node', err => {
  if (err) {
    throw err;
  }
  console.log('File was saved!');
});

fs.writeFileSync('./data/song3.txt', 'My challenges');

// APPEND FILE
fs.appendFile('./data/song2.txt', '\nFullstack JavaScript', err => {
  if (err) {
    throw err;
  }
  console.log('File was appended!');
});

fs.appendFileSync('./data/song3.txt', '\nFullstack JavaScript');

// RENAME FILE
fs.rename('./data/song4.txt', './data/song4.json', err => {
  if (err) {
    throw err;
  }
});

fs.renameSync('./data/song4.txt', './data/song4.json');

// DELETE FILE
fs.unlink('./data/song4.json', err => {
  if (err) {
    throw err;
  }
});

fs.unlinkSync('./data/song4.json');
