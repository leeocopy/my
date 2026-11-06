import fs from 'fs';

const homeCode = fs.readFileSync('beautified_Home.js', 'utf8');

// Find the section where location.pathname is handled
const routerIndex = homeCode.indexOf('slug: null');
if (routerIndex !== -1) {
  console.log('--- Router snippet in Home ---');
  console.log(homeCode.slice(routerIndex - 500, routerIndex + 1500));
}

// Find all data-cursor attributes
const cursorMatches = homeCode.match(/data-cursor(?:-[a-z]+)?="[^"]+"/g) || [];
console.log('\n--- data-cursor types ---', [...new Set(cursorMatches)]);

// Find all sections or work slugs
const workSlugs = homeCode.match(/["']chat-artify["']|["']run-x-ring["']|["']monster-chat-app["']|["']travala-travel["']|["']hyundai-tc-motor["']|["']yamaha-revzone["']|["']trip-social["']/g) || [];
console.log('\n--- Work Slugs ---', [...new Set(workSlugs)]);

