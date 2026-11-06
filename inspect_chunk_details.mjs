import fs from 'fs';

function inspectChunk(name) {
  const content = fs.readFileSync(`chunks/beautified_${name}`, 'utf8');
  console.log(`\n=== Chunk ${name} ===`);
  const functions = content.match(/function\s+([A-Za-z0-9_]+)\s*\(/g) || [];
  console.log('Functions:', functions.slice(0, 15));
  
  // Search for interactive components or state
  const stateHooks = content.match(/useState\(([^)]*)\)/g) || [];
  console.log('useState calls:', stateHooks);
}

inspectChunk('monster-chat-app-BrZCAeV4.js');
inspectChunk('trip-social-Deb5XBqh.js');
inspectChunk('playground-DtNc6i8i.js');

