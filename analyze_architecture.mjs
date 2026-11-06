import fs from 'fs';

const indexCode = fs.readFileSync('beautified_index.js', 'utf8');
const homeCode = fs.readFileSync('beautified_Home.js', 'utf8');

console.log('--- Analyzing Routing & App Entry ---');
// Search for router, routes, or path matching
const routerMatches = indexCode.match(/(?:pathname|location|history|popstate|Route|Switch|createBrowserRouter|RouterProvider)[\s\S]{0,100}/g) || [];
console.log('Router indicators in index:', routerMatches.slice(0, 10));

const homeRouter = homeCode.match(/(?:pathname|location|history|popstate|Route|Switch)[\s\S]{0,100}/g) || [];
console.log('Router indicators in Home:', homeRouter.slice(0, 10));

// Let's find how pages are rendered
console.log('\n--- Searching for page components in Home ---');
const components = homeCode.match(/function\s+([A-Z][a-zA-Z0-9_]*)\s*\(/g) || [];
console.log('Capitalized functions in Home (sample of 40):', [...new Set(components)].slice(0, 40));

// Check index for audio player & invert & cursor
console.log('\n--- Searching for Audio / Invert / Cursor in index ---');
const audioSections = indexCode.match(/function\s+([A-Za-z0-9_]+)[\s\S]{0,100}(?:audio|Audio|sound|music)[\s\S]{0,200}/g) || [];
console.log('Audio sections:', audioSections.slice(0, 5));

