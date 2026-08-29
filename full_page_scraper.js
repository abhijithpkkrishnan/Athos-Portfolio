import https from 'https';
import fs from 'fs';

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  console.log('Fetching raw HTML from https://athos.framer.website/ ...');
  const html = await get('https://athos.framer.website/');
  
  fs.writeFileSync('athos_raw_page.html', html);
  console.log('Saved athos_raw_page.html');

  // Extract all <style> contents
  const styleMatches = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]);
  fs.writeFileSync('athos_extracted_styles.css', styleMatches.join('\n\n'));
  console.log('Saved athos_extracted_styles.css with', styleMatches.length, 'style blocks.');
}

run();
