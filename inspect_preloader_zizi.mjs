import fs from 'fs';

const content = fs.readFileSync('public/assets/index-CF3Ad5Zo.js', 'utf8');
const idx = content.indexOf('{text:"Zizi"}');
console.log('Index text around Zizi:');
console.log(content.slice(idx - 300, idx + 300));

