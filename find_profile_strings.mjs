import fs from 'fs';

function searchInFile(filepath) {
  const content = fs.readFileSync(filepath, 'utf8');
  console.log(`\n=== Searching in ${filepath} ===`);

  const terms = ['Quynh', 'Cao', 'Zizi', 'zizi', 'Vietnam', 'Nam Dinh', 'Konpo', 'quynhcao', 'Bizzi', 'AirMe'];
  for (const term of terms) {
    let count = 0;
    let idx = 0;
    const matches = [];
    while ((idx = content.indexOf(term, idx)) !== -1) {
      count++;
      if (matches.length < 5) {
        matches.push(content.slice(Math.max(0, idx - 40), Math.min(content.length, idx + term.length + 40)).replace(/\n/g, ' '));
      }
      idx += term.length;
    }
    console.log(`Term "${term}": ${count} occurrences`);
    matches.forEach(m => console.log(`   ...${m}...`));
  }
}

searchInFile('public/assets/index-CF3Ad5Zo.js');
searchInFile('public/assets/Home-LrP0Tb4r.js');
searchInFile('index.html');

