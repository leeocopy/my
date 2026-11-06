import fs from 'fs';

const homeCode = fs.readFileSync('beautified_Home.js', 'utf8');

// Look for Lenis setup
const lenisMatch = homeCode.match(/new\s+Lenis\s*\(([\s\S]{0,300})\)/i);
if (lenisMatch) {
  console.log('--- Lenis init ---');
  console.log(lenisMatch[0]);
} else {
  const lenisIndex = homeCode.indexOf('Lenis');
  console.log('--- Lenis occurrence ---');
  console.log(homeCode.slice(lenisIndex - 100, lenisIndex + 300));
}

// Look for Header / Navbar component
const navIndex = homeCode.indexOf('aria-label="Primary"');
if (navIndex !== -1) {
  console.log('\n--- Nav / Header snippet ---');
  console.log(homeCode.slice(navIndex - 400, navIndex + 600));
}

