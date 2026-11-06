import fs from 'fs';

const content = fs.readFileSync('public/assets/Home-LrP0Tb4r.js', 'utf8');

// Find occurrences of "Selected work" or "Folio"
let idx = 0;
while ((idx = content.indexOf('Selected work', idx)) !== -1) {
  console.log('Found "Selected work" at', idx);
  console.log(content.slice(idx - 100, idx + 200));
  idx += 13;
}

// Find header or title components
const folioMatches = [];
idx = 0;
while ((idx = content.indexOf('Folio', idx)) !== -1) {
  folioMatches.push(content.slice(Math.max(0, idx - 50), Math.min(content.length, idx + 70)).replace(/\n/g, ' '));
  idx += 5;
}
console.log('Folio occurrences:', folioMatches);

