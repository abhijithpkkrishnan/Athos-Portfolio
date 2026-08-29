import https from 'https';
import fs from 'fs';

https.get('https://athos.framer.website/', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    // Find all stylesheet URLs in html
    const matches = html.match(/href="([^"]+\.css)"/g) || [];
    console.log('CSS Links found:', matches);

    // Find all style tags
    const styleBlocks = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [];
    console.log('Inline style tags count:', styleBlocks.length);

    fs.writeFileSync('framer_styles_dump.txt', html);
    console.log('Saved page dump to framer_styles_dump.txt');
  });
});
