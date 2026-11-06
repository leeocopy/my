import fs from 'fs';

function updateIndexHtml() {
  let html = fs.readFileSync('index.html', 'utf8');

  html = html.replace(/<title>Quynh Cao \(Zizi\) - Folio<\/title>/g, '<title>Abdelghafour Nimhil (Abdo) - Folio</title>');
  html = html.replace(/Portfolio of Quynh Cao \(Zizi\), a designer in Vietnam with 7 years across product, web, motion and design systems\./g, 
    'Portfolio of Abdelghafour Nimhil (Abdo), a Designer, Video Editor & UI/UX Designer in Marrakech, Morocco with 6+ years across branding, motion, video editing and digital interfaces.');
  html = html.replace(/<h1>Quynh Cao \(Zizi\) - Folio<\/h1>/g, '<h1>Abdelghafour Nimhil (Abdo) - Folio</h1>');
  html = html.replace(/quynhcao\.design@gmail\.com/g, 'lecopy1994@gmail.com');

  fs.writeFileSync('index.html', html);
  console.log('Updated index.html');
}

function updateIndexJs() {
  let js = fs.readFileSync('public/assets/index-CF3Ad5Zo.js', 'utf8');

  // Replace preloader Zizi with Abdo
  js = js.replace(/\{text:"Zizi"\}/g, '{text:"Abdo"}');

  fs.writeFileSync('public/assets/index-CF3Ad5Zo.js', js);
  console.log('Updated index-CF3Ad5Zo.js');
}

function updateHomeJs() {
  let js = fs.readFileSync('public/assets/Home-LrP0Tb4r.js', 'utf8');

  // Replace D4
  js = js.replace(/D4="Quynh Cao \(Zizi\) - Folio"/g, 'D4="Abdelghafour Nimhil (Abdo) - Folio"');
  js = js.replace(/title:"About - Zizi"/g, 'title:"About - Abdo"');
  js = js.replace(/title:"Playground - Zizi"/g, 'title:"Playground - Abdo"');

  // Replace description
  js = js.replace(/description:"Portfolio of Quynh Cao \(Zizi\), a designer in Vietnam with 7 years across product, web, motion and design systems\."/g,
    'description:"Portfolio of Abdelghafour Nimhil (Abdo), a Designer, Video Editor & UI/UX Designer in Marrakech, Morocco with 6+ years across branding, motion, video editing and digital interfaces."');

  // Replace Nam Dinh, Vietnam
  js = js.replace(/text:"Nam Dinh, Vietnam"/g, 'text:"Marrakech, Morocco"');

  // Replace email
  js = js.replace(/quynhcao\.design@gmail\.com/g, 'lecopy1994@gmail.com');

  // Replace alt:"Quynh Cao"
  js = js.replace(/alt:"Quynh Cao"/g, 'alt:"Abdelghafour Nimhil"');

  // Replace About bio w5
  const oldW5 = 'w5=["Hi, I\'m Quynh, nickname Zizi - The black cat from Studio Ghibli\'s Kiki\'s Delivery Service.","I have 7 years of hands-on Design Industry experience since 2019."]';
  const newW5 = 'w5=["Hi, I\'m Abdelghafour, nickname Abdo — Designer, Video Editor & UI/UX Designer based in Marrakech, Morocco.","I have 6+ years of hands-on industry experience crafting compelling visual identities, motion graphics, video editing and digital user experiences."]';
  js = js.replace(oldW5, newW5);

  // Replace Experience timeline v5
  const oldV5 = 'v5=[["2019","Bizzi Viet Nam Co.Ltd"],["2020","AirMe Joint Stock Company"],["2022 - Now","Konpo Studio"]]';
  const newV5 = 'v5=[["2019 - Present","Freelance Designer & Video Editor"],["2021 - 2024","Le Blokk"],["2024","WECONTENT"],["2024 - Present","IAWEB.DEV"]]';
  js = js.replace(oldV5, newV5);

  // Replace Skills x5
  const oldX5 = 'x5=[["Storytelling","Animation","Mobile App Design"],["Website Design","Design System","Vibe Code"]]';
  const newX5 = 'x5=[["UI/UX & Mobile Design","Video Editing","Motion Graphics"],["3D Design & VJ Loops","AI Creative Tools","Figma & Prototyping"]]';
  js = js.replace(oldX5, newX5);

  // Replace Brands / Clients b5
  const oldB5 = 'b5=[["Linearity","Vestlane","Betterview","SystemOne","Hair&Skin","Hyundai TC Motor","Yamaha Revzone Vietnam","LightYear Doc","SCS"],["NeboHealth","Moveek","Trip.social","ADP Space","ComPsych","Hutte","ILI Digital","Flyer","and more..."]]';
  const newB5 = 'b5=[["IAWEB.DEV","WECONTENT","Le Blokk","AIBC Institute","Icon Marketing","Semlalia"],["Google AI Certified","Multimédia Tech","Reels & Podcasts","VJ Loops","Motion Design","and more..."]]';
  js = js.replace(oldB5, newB5);

  // Replace Socials A5 and L5
  const oldA5 = 'A5=[["Dribbble","https://dribbble.com/cao-quynh"],["Behance","https://www.behance.net/chomotmien8bd5"]]';
  const newA5 = 'A5=[["Dribbble","https://dribbble.com/leonimhil"],["Portfolio","https://www.abdounimhil.myportfolio.com"]]';
  js = js.replace(oldA5, newA5);

  const oldL5 = 'L5=[["LinkedIn","https://www.linkedin.com/in/cao-quynh-b52830235/"],["Instagram","https://www.instagram.com/quynh_cao_/"]]';
  const newL5 = 'L5=[["LinkedIn","https://www.linkedin.com/in/abdelghafour-nimhil-39a44a210"],["Instagram","https://www.instagram.com/abdeleo1"]]';
  js = js.replace(oldL5, newL5);

  fs.writeFileSync('public/assets/Home-LrP0Tb4r.js', js);
  console.log('Updated Home-LrP0Tb4r.js');
}

updateIndexHtml();
updateIndexJs();
updateHomeJs();

