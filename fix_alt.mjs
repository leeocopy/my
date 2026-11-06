import fs from 'fs';

let js = fs.readFileSync('public/assets/Home-LrP0Tb4r.js', 'utf8');
js = js.replace('alt:le.alt??"Quynh Cao"', 'alt:le.alt??"Abdelghafour Nimhil"');
fs.writeFileSync('public/assets/Home-LrP0Tb4r.js', js);
console.log('Fixed alt in Home-LrP0Tb4r.js');

