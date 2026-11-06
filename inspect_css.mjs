import fs from 'fs';

const indexCss = fs.readFileSync('index.bundle.css', 'utf8');
const homeCss = fs.readFileSync('Home.bundle.css', 'utf8');

console.log('--- CSS Variables & Root Rules in index.css ---');
const rootRules = indexCss.match(/:root[\s\S]*?\}/g) || [];
console.log(rootRules.join('\n'));

console.log('\n--- Font Face Declarations ---');
const fontFaces = (indexCss + homeCss).match(/@font-face[\s\S]*?\}/g) || [];
console.log(fontFaces.join('\n\n'));

console.log('\n--- Theme Dark / Invert Rules ---');
const darkRules = (indexCss + homeCss).match(/\[data-theme=["']?dark["']?\][\s\S]{0,200}/g) || [];
console.log('Dark theme selectors sample:', darkRules.slice(0, 5));

