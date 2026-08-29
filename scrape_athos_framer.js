import https from 'https';
import fs from 'fs';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  console.log('Fetching Framer bundle from athos.framer.website...');
  const html = await fetchUrl('https://athos.framer.website/');
  
  // Find main JS bundle links in Framer HTML
  const jsModules = html.match(/https:\/\/framerusercontent\.com\/modules\/[^\"]+/g) || [];
  console.log(`Found ${jsModules.length} Framer JS modules.`);

  let allScriptData = html;

  for (const moduleUrl of jsModules.slice(0, 15)) {
    try {
      console.log('Fetching module:', moduleUrl);
      const modContent = await fetchUrl(moduleUrl);
      allScriptData += '\n' + modContent;
    } catch (e) {
      console.error('Failed module:', moduleUrl);
    }
  }

  // Extract noise / grain / texture URLs or SVG filters
  const noiseMatches = allScriptData.match(/feTurbulence|grain|noise|texture|background-image:[^;\}"]+/gi) || [];
  console.log('\n--- NOISE & TEXTURES ---');
  console.log([...new Set(noiseMatches)].slice(0, 30));

  // Extract Framer Motion transition / spring configs
  const springMatches = allScriptData.match(/\{"type":"spring"[^\}]+\}/g) || [];
  console.log('\n--- SPRINGS & ANIMATIONS ---');
  console.log([...new Set(springMatches)].slice(0, 20));

  const easeMatches = allScriptData.match(/\[0\.\d+,\s*0\.\d+,\s*0\.\d+,\s*0\.\d+\]/g) || [];
  console.log('\n--- EASE BEZIERS ---');
  console.log([...new Set(easeMatches)].slice(0, 20));

  // Extract shadow values
  const shadowMatches = allScriptData.match(/box-shadow:[^;\}"]+/gi) || [];
  console.log('\n--- BOX SHADOWS ---');
  console.log([...new Set(shadowMatches)].slice(0, 20));

  fs.writeFileSync('framer_full_bundle_dump.txt', allScriptData);
  console.log('\nSaved full bundle dump to framer_full_bundle_dump.txt');
}

main();
