import fs from 'fs';

const indexCode = fs.readFileSync('beautified_index.js', 'utf8');

const w2Index = indexCode.indexOf('function W2({');
console.log('--- W2 Loader component ---');
console.log(indexCode.slice(w2Index, w2Index + 3000));

