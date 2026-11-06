import fs from 'fs';

const indexCode = fs.readFileSync('beautified_index.js', 'utf8');

const curtainIndex = indexCode.indexOf('void main() {');
// get the second void main() which is the fragment shader
const secondMain = indexCode.indexOf('void main() {', curtainIndex + 20);
console.log('--- fragment shader void main ---');
console.log(indexCode.slice(secondMain, secondMain + 1000));

