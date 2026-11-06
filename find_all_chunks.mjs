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
  const homeContent = fs.readFileSync('Home.bundle.js', 'utf8');
  
  // Search for all asset files mentioned in Home.bundle.js
  const assetMatches = homeContent.match(/assets\/[A-Za-z0-9_\-\.]+\.(?:js|css|webp|png|svg|avif|mp3|wav|ogg|woff2)/g) || [];
  console.log('Asset matches in Home:', [...new Set(assetMatches)]);

  // Let's also search for all chunk file names in Home
  const allJs = homeContent.match(/[A-Za-z0-9_\-\.]+\.(?:js|css)/g) || [];
  const uniqueChunks = [...new Set(allJs)].filter(f => f.includes('-') || f.endsWith('.css'));
  console.log('Unique chunks / css:', uniqueChunks);

  // Let's download CSS files
  const indexCss = await fetchUrl('https://quynh.moe/assets/index-Ci-2K9Cr.css');
  fs.writeFileSync('index.bundle.css', indexCss.data);
  console.log('index.css size:', indexCss.data.length);

  const homeCss = await fetchUrl('https://quynh.moe/assets/Home-CqJJnoUv.css');
  fs.writeFileSync('Home.bundle.css', homeCss.data);
  console.log('Home.css size:', homeCss.data.length);

  // Let's check About page HTML to see what assets it requests or preloads
  const aboutHtml = await fetchUrl('https://quynh.moe/about');
  console.log('About HTML preloads/scripts:', [...aboutHtml.data.matchAll(/(?:src|href)="([^"]+)"/g)].map(m => m[1]));

  // Let's check Playground HTML
  const playgroundHtml = await fetchUrl('https://quynh.moe/playground');
  console.log('Playground HTML preloads/scripts:', [...playgroundHtml.data.matchAll(/(?:src|href)="([^"]+)"/g)].map(m => m[1]));
}

main().catch(console.error);

