import fs from 'fs';

const content = fs.readFileSync('public/assets/Home-LrP0Tb4r.js', 'utf8');

// search for timeZone, Asia, Vietnam, GMT, or clock calculations
const clockIdx = content.indexOf('function W3');
if (clockIdx !== -1) {
  console.log('--- W3 Clock function ---');
  console.log(content.slice(clockIdx, clockIdx + 1200));
} else {
  // search for W3=
  const w3Idx = content.indexOf('W3=');
  console.log('--- W3 definition ---');
  console.log(content.slice(w3Idx - 100, w3Idx + 1000));
}

