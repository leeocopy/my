import fs from 'fs';

function inspectFile(filename) {
  const content = fs.readFileSync(filename, 'utf8');
  console.log(`\n=== Analyzing ${filename} (${content.length} bytes) ===`);

  // Look for comments, author, licenses, package names
  const licenseComments = content.match(/\/\*![\s\S]*?\*\//g) || [];
  console.log('Licenses / header comments:', licenseComments.length);
  licenseComments.forEach(c => console.log(' - ' + c.slice(0, 100).replace(/\n/g, ' ')));

  // Look for exported names or component-like patterns
  // Look for state hooks: useState, useEffect, useRef, useMemo, useCallback
  // Look for window variables or custom event listeners
  const events = content.match(/addEventListener\(['"]([^'"]+)['"]/g) || [];
  console.log('Event listeners:', [...new Set(events)]);

  // Look for audio / media references
  const audioUrls = content.match(/['"][^'"]*?\.(?:mp3|wav|ogg|m4a|aac|webm)['"]/gi) || [];
  console.log('Audio files:', [...new Set(audioUrls)]);

  // Look for video references
  const videoUrls = content.match(/['"][^'"]*?\.(?:mp4|webm|mov)['"]/gi) || [];
  console.log('Video files:', [...new Set(videoUrls)]);

  // Look for font references
  const fontUrls = content.match(/['"][^'"]*?\.(?:woff2?|ttf|otf)['"]/gi) || [];
  console.log('Font files:', [...new Set(fontUrls)]);

  // Look for SVG paths / icons or canvas
  const svgOrCanvas = {
    canvas: (content.match(/<canvas|createElement\(['"]canvas['"]\)/g) || []).length,
    gsap: (content.match(/gsap\b|ScrollTrigger|TweenMax|TimelineMax/gi) || []).length,
    lenis: (content.match(/lenis/gi) || []).length,
    audioContext: (content.match(/AudioContext|webkitAudioContext/g) || []).length
  };
  console.log('Features:', svgOrCanvas);
}

inspectFile('index.bundle.js');
inspectFile('Home.bundle.js');

