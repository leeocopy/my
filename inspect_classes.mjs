import fs from 'fs';

const homeCode = fs.readFileSync('beautified_Home.js', 'utf8');

const matches = homeCode.match(/class\s+([A-Za-z0-9_]+)[\s\S]{0,100}scrollTo/g) || [];
console.log('Classes with scrollTo:', matches);

// Search for smooth scroll or lenis
const lenisClass = homeCode.indexOf('class ');
let cur = 0;
while (cur < 50000) {
  const nextClass = homeCode.indexOf('class ', cur);
  if (nextClass === -1) break;
  console.log(homeCode.slice(nextClass, nextClass + 80).replace(/\n/g, ' '));
  cur = nextClass + 6;
}

