import fs from 'fs';

const content = fs.readFileSync('public/assets/Home-LrP0Tb4r.js', 'utf8');

const u1Idx = content.indexOf('u1=');
console.log('u1 snippet:', content.slice(u1Idx - 50, u1Idx + 300));

