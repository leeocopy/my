import fs from 'fs';

const indexCode = fs.readFileSync('beautified_index.js', 'utf8');

function findDef(name) {
  const regex = new RegExp(`(?:function\\s+${name}\\b|const\\s+${name}\\s*=|let\\s+${name}\\s*=)`, 'g');
  let match;
  console.log(`\n=== Finding ${name} ===`);
  while ((match = regex.exec(indexCode)) !== null) {
    console.log(indexCode.slice(match.index, match.index + 800));
    console.log('----------------------------');
  }
}

findDef('W2'); // Loader
findDef('ov'); // Transition curtain
findDef('cw'); // Custom Cursor
findDef('K2'); 
findDef('q2');
findDef('tv'); // theme/chrome color manager

