import fs from 'fs';

const homeCode = fs.readFileSync('beautified_Home.js', 'utf8');

// Search for iPad mockup or Hyundai
const hyundaiIndex = homeCode.indexOf('hyundai-tc-motor-ipad');
console.log('--- Hyundai interactive component ---');
console.log(homeCode.slice(hyundaiIndex - 200, hyundaiIndex + 1500));

// Search for Trip Social interactive map
const mapIndex = homeCode.indexOf('trip-social-map');
console.log('\n--- Trip Social interactive map ---');
console.log(homeCode.slice(mapIndex - 200, mapIndex + 1500));

