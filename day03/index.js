const fs = require('fs');

const data = fs.readFileSync('data.txt').toString();

const pattern = /an*/gim;
const result = data.match(pattern);

console.log((result && result.length) || 0);

// Telephone must be a valid VN telephone number (10 digits)
const phone = /^\d{10}$/gi;
// Username must be alphanumeric and contain 5–11 characters (case insensitive)
const username = /^[a-z\d]{5,11}$/gi;
// Password must alphanumeric (@, _ , – are also allowed) and be 8–20 characters
const password = /^[\w@_-]{8,20}$/gi;
// Slug must contain only lowercase letters, numbers and hyphens and be 8–20 characters
const slug = /^[a-z\d-]{8,20}$/g;

// Email: (1. name) @ (2. domain) . (3. extension)(4. .again)
const email = /^[a-z\d\.-]+@[a-z\d-]\.[a-z]{2,8}\.[a-z]{2,8}?$/gi;
