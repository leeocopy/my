import fs from 'fs';

const content = fs.readFileSync('public/assets/Home-LrP0Tb4r.js', 'utf8');

let idx = 0;
while ((idx = content.indexOf('Nam Dinh', idx)) !== -1) {
  console.log('Found Nam Dinh at', idx);
  console.log(content.slice(idx - 150, idx + 150));
  idx += 8;
}

const d4Idx = content.indexOf('D4=');
console.log('--- D4 snippet ---');
console.log(content.slice(d4Idx - 100, d4Idx + 500));

