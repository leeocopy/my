import fs from 'fs';

console.log('--- monster-chat-app sample ---');
const monster = fs.readFileSync('chunks/beautified_monster-chat-app-BrZCAeV4.js', 'utf8');
console.log(monster.slice(0, 1500));

console.log('\n--- playground sample ---');
const playground = fs.readFileSync('chunks/beautified_playground-DtNc6i8i.js', 'utf8');
console.log(playground.slice(0, 1500));

