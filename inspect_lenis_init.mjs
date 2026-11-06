import fs from 'fs';

const homeCode = fs.readFileSync('beautified_Home.js', 'utf8');

let pos = 0;
while (true) {
  const idx = homeCode.indexOf('new ', pos);
  if (idx === -1) break;
  const chunk = homeCode.slice(idx, idx + 40);
  if (chunk.includes('Lenis') || chunk.includes('class') || chunk.includes('lenis')) {
    console.log('Found:', homeCode.slice(idx - 100, idx + 300));
    console.log('----------------');
  }
  pos = idx + 4;
}

