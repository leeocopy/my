import fs from 'fs';
import https from 'https';

const chunks = [
  'chat-artify-BwoV7qDq.js',
  'run-x-ring-CX1WDc6a.js',
  'monster-chat-app-BrZCAeV4.js',
  'travala-travel-XYQMnR_R.js',
  'hyundai-tc-motor-u0X58n-k.js',
  'yamaha-revzone-B4V5sCWz.js',
  'trip-social-Deb5XBqh.js',
  'playground-DtNc6i8i.js',
  'web-vitals-ByGxmBzI.js'
];

async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data, headers: res.headers }));
    }).on('error', reject);
  });
}

if (!fs.existsSync('chunks')) fs.mkdirSync('chunks');

async function main() {
  for (const chunk of chunks) {
    const res = await fetchUrl(`https://quynh.moe/assets/${chunk}`);
    if (res.status === 200) {
      fs.writeFileSync(`chunks/${chunk}`, res.data);
      console.log(`Saved ${chunk} (${res.data.length} bytes)`);

      // check if chunk mentions any other js or css
      const cssMatches = res.data.match(/[A-Za-z0-9_\-\.]+\.css/g) || [];
      if (cssMatches.length) console.log(`  CSS for ${chunk}:`, [...new Set(cssMatches)]);
    } else {
      console.log(`Failed ${chunk}: status ${res.status}`);
    }
  }
}

main().catch(console.error);

