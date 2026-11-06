import fs from 'fs';

const indexCode = fs.readFileSync('beautified_index.js', 'utf8');
const lines = indexCode.split('\n');
console.log('Total lines in beautified_index.js:', lines.length);
console.log('Last 200 lines:');
console.log(lines.slice(-200).join('\n'));

