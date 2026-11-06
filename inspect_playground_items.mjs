import fs from 'fs';

const homeCode = fs.readFileSync('beautified_Home.js', 'utf8');

// Find playground items array
const pgMatches = homeCode.match(/playground-gallery-\d+/g) || [];
console.log('Unique playground gallery items:', [...new Set(pgMatches)].sort());

