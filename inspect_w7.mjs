import fs from 'fs';

const content = fs.readFileSync('public/assets/Home-LrP0Tb4r.js', 'utf8');

const w7Idx = content.indexOf('function W7');
console.log('--- W7 full function ---');
console.log(content.slice(w7Idx, w7Idx + 2000));

