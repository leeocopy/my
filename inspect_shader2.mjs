import fs from 'fs';

const indexCode = fs.readFileSync('beautified_index.js', 'utf8');

const curtainIndex = indexCode.indexOf('g1100 = vec4(gx00.w');
console.log('--- rest of shader ---');
console.log(indexCode.slice(curtainIndex, curtainIndex + 2000));

