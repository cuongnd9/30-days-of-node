const names = ['Cuongw', 'Duy', 'Nguyen'];
names.push('Khanh');
console.log(names);
names.pop();
console.log(names);
names.unshift('Ngan');
console.log(names);
names.shift();
console.log(names);
names.reverse();
console.log(names);
names.sort();
console.log(names);
names.splice(1, 1);
console.log(names);
names.splice(1, 0, 'Duy', 'Khanh', 'Ngan', 'Thu', 'Hanh');
console.log(names);
console.log(names.concat(['Ngoc', 'Lan']));
console.log(names.indexOf('Duy'));
console.log(names.lastIndexOf('Khanh'));
console.log(names.join(' 🙌 '));
console.log(names.slice(2, 5));
console.log(names.slice(1));
console.log(names.every(name => name % 2 === 0)); // Return boolean.
console.log(names.filter(name => name.length === 5)); // Return array.
console.log(names.find(name => name.length === 5)); // Return only item.
names.forEach(name => console.log(name));
console.log(names.reduce((name, total) => total += name));
