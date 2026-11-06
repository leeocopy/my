import fs from 'fs';

const content = fs.readFileSync('public/assets/Home-LrP0Tb4r.js', 'utf8');

const clockIdx = content.indexOf('function W3');
const clockCode = content.slice(clockIdx, clockIdx + 4000);

const dateMatch = clockCode.match(/new Date|getHours|getUTC|timeZone|Intl/g);
console.log('Date mentions in W3:', dateMatch);

const dateIndices = [];
let i = 0;
while ((i = clockCode.indexOf('Date', i)) !== -1) {
  console.log('Date snippet:', clockCode.slice(i - 40, i + 80));
  i += 4;
}

