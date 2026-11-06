import https from 'https';
import fs from 'fs';

async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data, headers: res.headers }));
    }).on('error', reject);
  });
}

async function run() {
  const htmlRes = await fetchUrl('https://quynh.moe/');
  console.log('HTML size:', htmlRes.data.length);

  // Match all script tags and css links
  const scriptMatches = [...htmlRes.data.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
  const linkMatches = [...htmlRes.data.matchAll(/href="([^"]+)"/g)].map(m => m[1]);

  console.log('Scripts:', scriptMatches);
  console.log('Links:', linkMatches);

  // Fetch index js
  const indexJsUrl = 'https://quynh.moe/assets/index-CF3Ad5Zo.js';
  const indexJs = await fetchUrl(indexJsUrl);
  console.log('index.js size:', indexJs.data.length);
  fs.writeFileSync('index.bundle.js', indexJs.data);

  // Search for chunks inside indexJs
  const chunkRegex = /assets\/[A-Za-z0-9_\-\.]+\.(?:js|css)/g;
  const foundChunks = Array.from(new Set(indexJs.data.match(chunkRegex) || []));
  console.log('Found chunks in index.js:', foundChunks);

  // Let's also search for route strings or path regexes
  const paths = Array.from(new Set(indexJs.data.match(/"\/(?:work|about|playground)[a-zA-Z0-9_\-\/]*"/g) || []));
  console.log('Found paths:', paths);
}

run().catch(console.error);

