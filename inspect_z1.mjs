import fs from 'fs';

const homeCode = fs.readFileSync('beautified_Home.js', 'utf8');

// Find z1 definition
const z1Match = homeCode.indexOf('const z1 =');
if (z1Match !== -1) {
  console.log('--- z1 projects array ---');
  console.log(homeCode.slice(z1Match, z1Match + 3500));
} else {
  // search for chat-artify in array
  const artifyIndex = homeCode.indexOf('slug: "chat-artify"');
  console.log('--- project item snippet ---');
  console.log(homeCode.slice(artifyIndex - 200, artifyIndex + 1500));
}

