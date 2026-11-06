import fs from 'fs';

const indexCode = fs.readFileSync('beautified_index.js', 'utf8');

// Find ReactDOM.createRoot or render
const renderIndex = indexCode.lastIndexOf('createRoot');
console.log('--- createRoot snippet ---');
console.log(indexCode.slice(renderIndex - 300, renderIndex + 500));

// Find custom cursor implementation
const cursorIndex = indexCode.indexOf('cursor');
console.log('\n--- Cursor search sample ---');
const cursorSnippets = indexCode.match(/(?:cursor|pointer)[\s\S]{0,100}/g) || [];
console.log('Cursor mentions:', cursorSnippets.slice(0, 10));

