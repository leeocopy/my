import fs from 'fs';

const homeCode = fs.readFileSync('beautified_Home.js', 'utf8');

const s7Match = homeCode.indexOf('const S7 =');
if (s7Match !== -1) {
  console.log('--- S7 array ---');
  console.log(homeCode.slice(s7Match, s7Match + 4000));
}

