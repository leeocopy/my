import fs from 'fs';

const homeCode = fs.readFileSync('beautified_Home.js', 'utf8');

// Find about page text
const aboutIdx = homeCode.indexOf('Konpo Studio');
console.log('--- About Section Details ---');
console.log(homeCode.slice(aboutIdx - 300, aboutIdx + 1200));

// Find playground items
const playgroundIdx = homeCode.indexOf('A corner for unused shots');
console.log('\n--- Playground Details ---');
console.log(homeCode.slice(playgroundIdx - 200, playgroundIdx + 1500));

