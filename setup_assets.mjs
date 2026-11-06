import fs from 'fs';
import https from 'https';
import path from 'path';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded ${dest}`);
          resolve();
        });
      } else {
        file.close();
        fs.unlink(dest, () => {});
        console.log(`Failed ${url}: status ${res.statusCode}`);
        resolve();
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      console.error(`Error downloading ${url}:`, err.message);
      resolve();
    });
  });
}

async function main() {
  const files = [
    // Fonts
    ['https://quynh.moe/fonts/HelveticaNowDisplay-Bold.woff2', 'public/fonts/HelveticaNowDisplay-Bold.woff2'],
    ['https://quynh.moe/fonts/HelveticaNowDisplay-Regular.woff2', 'public/fonts/HelveticaNowDisplay-Regular.woff2'],
    ['https://quynh.moe/fonts/JetBrainsMono-Regular.woff2', 'public/fonts/JetBrainsMono-Regular.woff2'],
    ['https://quynh.moe/assets/dm-sans-latin-400-normal-Ryn7VuCb.woff2', 'public/assets/dm-sans-latin-400-normal-Ryn7VuCb.woff2'],
    ['https://quynh.moe/assets/dm-sans-latin-500-normal-0zH4wDKe.woff2', 'public/assets/dm-sans-latin-500-normal-0zH4wDKe.woff2'],
    ['https://quynh.moe/assets/dm-sans-latin-700-normal-BU1huWnE.woff2', 'public/assets/dm-sans-latin-700-normal-BU1huWnE.woff2'],
    ['https://quynh.moe/assets/libre-franklin-latin-wght-normal-CLTz0ja0.woff2', 'public/assets/libre-franklin-latin-wght-normal-CLTz0ja0.woff2'],
    // Favicons
    ['https://quynh.moe/zizi-favicon.svg', 'public/zizi-favicon.svg'],
    ['https://quynh.moe/zizi-favicon-32.png', 'public/zizi-favicon-32.png'],
    ['https://quynh.moe/zizi-apple-touch-icon.png', 'public/zizi-apple-touch-icon.png'],
    // Audio
    ['https://quynh.moe/assets/The%20Earth%20Prelude-C69ddvHx.m4a', 'public/assets/The Earth Prelude-C69ddvHx.m4a'],
    // CSS
    ['https://quynh.moe/assets/index-Ci-2K9Cr.css', 'public/assets/index-Ci-2K9Cr.css'],
    ['https://quynh.moe/assets/Home-CqJJnoUv.css', 'public/assets/Home-CqJJnoUv.css'],
    // Core JS
    ['https://quynh.moe/assets/index-CF3Ad5Zo.js', 'public/assets/index-CF3Ad5Zo.js'],
    ['https://quynh.moe/assets/Home-LrP0Tb4r.js', 'public/assets/Home-LrP0Tb4r.js'],
    // All Chunks
    ['https://quynh.moe/assets/chat-artify-BwoV7qDq.js', 'public/assets/chat-artify-BwoV7qDq.js'],
    ['https://quynh.moe/assets/run-x-ring-CX1WDc6a.js', 'public/assets/run-x-ring-CX1WDc6a.js'],
    ['https://quynh.moe/assets/monster-chat-app-BrZCAeV4.js', 'public/assets/monster-chat-app-BrZCAeV4.js'],
    ['https://quynh.moe/assets/travala-travel-XYQMnR_R.js', 'public/assets/travala-travel-XYQMnR_R.js'],
    ['https://quynh.moe/assets/hyundai-tc-motor-u0X58n-k.js', 'public/assets/hyundai-tc-motor-u0X58n-k.js'],
    ['https://quynh.moe/assets/yamaha-revzone-B4V5sCWz.js', 'public/assets/yamaha-revzone-B4V5sCWz.js'],
    ['https://quynh.moe/assets/trip-social-Deb5XBqh.js', 'public/assets/trip-social-Deb5XBqh.js'],
    ['https://quynh.moe/assets/playground-DtNc6i8i.js', 'public/assets/playground-DtNc6i8i.js'],
    ['https://quynh.moe/assets/web-vitals-ByGxmBzI.js', 'public/assets/web-vitals-ByGxmBzI.js'],
    // Asset images in /assets
    ['https://quynh.moe/assets/monster-chat-app-screen-explore-4ZPXvhmD.webp', 'public/assets/monster-chat-app-screen-explore-4ZPXvhmD.webp'],
    ['https://quynh.moe/assets/monster-chat-app-screen-messages-efO23oX7.webp', 'public/assets/monster-chat-app-screen-messages-efO23oX7.webp'],
    ['https://quynh.moe/assets/monster-chat-app-screen-splash-B0v8_2F7.webp', 'public/assets/monster-chat-app-screen-splash-B0v8_2F7.webp'],
    ['https://quynh.moe/assets/monster-chat-app-screen-timeline-ztEh4hhS.webp', 'public/assets/monster-chat-app-screen-timeline-ztEh4hhS.webp'],
    ['https://quynh.moe/assets/monster-chat-app-screen-video-call-BjjuLEny.webp', 'public/assets/monster-chat-app-screen-video-call-BjjuLEny.webp'],
    ['https://quynh.moe/assets/monster-chat-app-tl-av3-BxHUkOh4.webp', 'public/assets/monster-chat-app-tl-av3-BxHUkOh4.webp'],
    ['https://quynh.moe/assets/monster-chat-app-ex-icon-DcQ4qbgg.webp', 'public/assets/monster-chat-app-ex-icon-DcQ4qbgg.webp'],
    ['https://quynh.moe/assets/monster-chat-app-splash-rings-D-T_nixz.webp', 'public/assets/monster-chat-app-splash-rings-D-T_nixz.webp'],
    ['https://quynh.moe/assets/monster-chat-app-frame-1080-DuC9UUYt.webp', 'public/assets/monster-chat-app-frame-1080-DuC9UUYt.webp'],
    ['https://quynh.moe/assets/monster-chat-app-frame-2160-DElbwkQS.webp', 'public/assets/monster-chat-app-frame-2160-DElbwkQS.webp'],
    ['https://quynh.moe/assets/monster-chat-app-status-bar-C4n4iz6z.svg', 'public/assets/monster-chat-app-status-bar-C4n4iz6z.svg'],
    ['https://quynh.moe/assets/hyundai-tc-motor-ipad-frame-2160-ZLfxzWE5.webp', 'public/assets/hyundai-tc-motor-ipad-frame-2160-ZLfxzWE5.webp'],
    ['https://quynh.moe/assets/hyundai-tc-motor-ipad-page-BKyMDGuW.webp', 'public/assets/hyundai-tc-motor-ipad-page-BKyMDGuW.webp'],
    ['https://quynh.moe/assets/monster-chat-app-wallet-av06-BJJiEPhh.webp', 'public/assets/monster-chat-app-wallet-av06-BJJiEPhh.webp'],
    ['https://quynh.moe/assets/monster-chat-app-wallet-av11-BTmS9Fs6.webp', 'public/assets/monster-chat-app-wallet-av11-BTmS9Fs6.webp'],
    ['https://quynh.moe/assets/monster-chat-app-wallet-shot-1-BG4e8lzq.webp', 'public/assets/monster-chat-app-wallet-shot-1-BG4e8lzq.webp'],
    ['https://quynh.moe/assets/monster-chat-app-wallet-shot-2-BJjZTQLF.webp', 'public/assets/monster-chat-app-wallet-shot-2-BJjZTQLF.webp'],
    ['https://quynh.moe/assets/monster-chat-app-wallet-shot-3-DxHgdVHQ.webp', 'public/assets/monster-chat-app-wallet-shot-3-DxHgdVHQ.webp'],
    ['https://quynh.moe/assets/monster-chat-app-wallet-shot-4-C8Unsz0V.webp', 'public/assets/monster-chat-app-wallet-shot-4-C8Unsz0V.webp'],
    ['https://quynh.moe/assets/monster-chat-app-wallet-frame-1080-Dn3MIqS-.webp', 'public/assets/monster-chat-app-wallet-frame-1080-Dn3MIqS-.webp'],
    ['https://quynh.moe/assets/monster-chat-app-wallet-frame-2160-IEvFjT1N.webp', 'public/assets/monster-chat-app-wallet-frame-2160-IEvFjT1N.webp'],
    ['https://quynh.moe/assets/monster-chat-app-wallet-map-r5J-M3EI.webp', 'public/assets/monster-chat-app-wallet-map-r5J-M3EI.webp'],
    ['https://quynh.moe/assets/monster-chat-app-wallet-sheet-DtsJY2Ms.webp', 'public/assets/monster-chat-app-wallet-sheet-DtsJY2Ms.webp'],
    ['https://quynh.moe/assets/monster-chat-app-wallet-wallet-BZRVYmhH.webp', 'public/assets/monster-chat-app-wallet-wallet-BZRVYmhH.webp'],
    ['https://quynh.moe/assets/monster-chat-app-wallet-nav-nearby-DsmUqWLW.webp', 'public/assets/monster-chat-app-wallet-nav-nearby-DsmUqWLW.webp'],
    ['https://quynh.moe/assets/monster-chat-app-wallet-nav-wallet-D5fDw8M8.webp', 'public/assets/monster-chat-app-wallet-nav-wallet-D5fDw8M8.webp'],
    ['https://quynh.moe/assets/trip-social-map-sky-1262-DtfyKAuc.webp', 'public/assets/trip-social-map-sky-1262-DtfyKAuc.webp'],
    ['https://quynh.moe/assets/trip-social-map-sky-2524-BTplbkO8.webp', 'public/assets/trip-social-map-sky-2524-BTplbkO8.webp'],
    ['https://quynh.moe/assets/trip-social-map-map-720-BlmN2CRP.webp', 'public/assets/trip-social-map-map-720-BlmN2CRP.webp'],
    ['https://quynh.moe/assets/trip-social-map-map-1440-BuhZMNju.webp', 'public/assets/trip-social-map-map-1440-BuhZMNju.webp'],
    ['https://quynh.moe/assets/trip-social-map-castle-31SPdRr7.webp', 'public/assets/trip-social-map-castle-31SPdRr7.webp'],
    ['https://quynh.moe/assets/trip-social-map-museum-CZgee8r7.webp', 'public/assets/trip-social-map-museum-CZgee8r7.webp'],
    ['https://quynh.moe/assets/trip-social-map-vaults-DPjT9LdF.webp', 'public/assets/trip-social-map-vaults-DPjT9LdF.webp']
  ];

  for (const [url, dest] of files) {
    await downloadFile(url, dest);
  }
  console.log('All essential assets downloaded!');
}

main().catch(console.error);

