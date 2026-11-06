import fs from 'fs';

const content = fs.readFileSync('public/assets/Home-LrP0Tb4r.js', 'utf8');

// search for nav or header or "Work" "About" "Playground"
const navIdx = content.indexOf('"Work"');
console.log('Nav snippet:');
console.log(content.slice(navIdx - 200, navIdx + 500));

