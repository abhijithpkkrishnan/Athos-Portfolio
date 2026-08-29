import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assets = [
  { url: 'https://framerusercontent.com/images/Tfq2kT0nKE9nq193Uoo4UlFVfdM.png?width=432&height=432', name: 'avatar.png' },
  { url: 'https://framerusercontent.com/images/zwJ21nAli5s96GXUzZUkP7MHk.png?width=2400&height=1800', name: 'case-travel.png' },
  { url: 'https://framerusercontent.com/images/RVjolG9yEts4HWOx938nqfHkw.jpg?width=2400&height=1800', name: 'case-ecommerce.jpg' },
  { url: 'https://framerusercontent.com/images/rO0dT428ygBSowF3XfHVWe8VPog.jpg?width=1600&height=1200', name: 'case-streaming.jpg' },
  { url: 'https://framerusercontent.com/images/FijwIoy2KX3KTeZ9sLOsZ4L7FsE.jpg?width=2400&height=1800', name: 'case-banking.jpg' },
  { url: 'https://framerusercontent.com/images/Muvrwo0iPNQVc9oCSgA0HP3pkro.jpg?width=2048&height=1365', name: 'case-detail-1.jpg' },
  { url: 'https://framerusercontent.com/images/4RFVcKnsTMWDfXPEDX1POAIWnE.jpg?width=2048&height=1365', name: 'case-detail-2.jpg' },
  { url: 'https://framerusercontent.com/images/TiBpigjAAj3kPmVwWnGrOwYUwo.jpg?width=2048&height=2048', name: 'case-detail-3.jpg' },
  { url: 'https://framerusercontent.com/images/KHgIfpCUTM3SEAMCBkivLyl9oE.jpg?width=2048&height=1152', name: 'case-detail-4.jpg' },
  { url: 'https://framerusercontent.com/images/yCjlpydFcllzpNAPxj3kEFHcGZA.jpg?width=2048&height=1152', name: 'case-detail-5.jpg' },
  { url: 'https://framerusercontent.com/images/TPaNAECLGszNKIgydxoQyi8w8nw.png?width=800&height=1201', name: 'blog-hero-1.png' },
  { url: 'https://framerusercontent.com/images/3dpALmvrIR88qPmbDlYoTyJSig.png', name: 'favicon.png' },
];

const destDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  console.log('Downloading assets...');
  for (const item of assets) {
    const filePath = path.join(destDir, item.name);
    try {
      await downloadFile(item.url, filePath);
      console.log(`Downloaded ${item.name}`);
    } catch (err) {
      console.error(`Failed to download ${item.name}:`, err.message);
    }
  }
  console.log('Done downloading assets!');
}

main();
