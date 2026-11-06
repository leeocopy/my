import fs from 'fs';

const indexCode = fs.readFileSync('beautified_index.js', 'utf8');

const curtainIndex = indexCode.indexOf('createDissolveCurtain');
console.log('--- createDissolveCurtain snippet ---');
console.log(indexCode.slice(curtainIndex, curtainIndex + 2500));

