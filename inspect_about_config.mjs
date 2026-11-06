import fs from 'fs';

const content = fs.readFileSync('public/assets/Home-LrP0Tb4r.js', 'utf8');

const idx = content.indexOf('w5=[');
console.log('--- About Section Config in Home ---');
console.log(content.slice(idx - 200, idx + 2500));

