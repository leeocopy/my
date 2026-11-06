import fs from 'fs';

const indexCode = fs.readFileSync('beautified_index.js', 'utf8');

const shaderIndex = indexCode.indexOf('attribute vec2 aPos;');
console.log('--- WebGL Transition Shader & Component ---');
console.log(indexCode.slice(shaderIndex - 50, shaderIndex + 2500));

