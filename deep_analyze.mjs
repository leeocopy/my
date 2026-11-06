import fs from 'fs';
import https from 'https';

async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data, headers: res.headers }));
    }).on('error', reject);
  });
}

async function main() {
  const content = fs.readFileSync('index.bundle.js', 'utf8');

  // Let's check for all strings ending in .js or containing assets/
  const jsMatches = content.match(/[A-Za-z0-9_\-\.]+\.js/g) || [];
  console.log('All JS filenames mentioned:', [...new Set(jsMatches)]);

  // Check libraries
  const keywords = ['framer', 'motion', 'lenis', 'locomotive', 'gsap', 'three', 'canvas', 'audio', 'sound', 'howler', 'lucide', 'radix', 'tailwind', 'zustand', 'jotai', 'redux', 'router', 'wouter', 'matter', 'pixi'];
  for (const k of keywords) {
    const matches = content.match(new RegExp(k, 'gi')) || [];
    console.log(`${k}: ${matches.length}`);
  }

  // Let's fetch Home chunk
  const homeRes = await fetchUrl('https://quynh.moe/assets/Home-LrP0Tb4r.js');
  console.log('Home-LrP0Tb4r.js size:', homeRes.data.length);
  fs.writeFileSync('Home.bundle.js', homeRes.data);

  const homeJsMatches = homeRes.data.match(/[A-Za-z0-9_\-\.]+\.js/g) || [];
  console.log('Home JS filenames mentioned:', [...new Set(homeJsMatches)]);
}

main().catch(console.error);

