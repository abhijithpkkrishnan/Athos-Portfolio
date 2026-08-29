import fs from 'fs';

const content = fs.readFileSync('framer_styles_dump.txt', 'utf8');

// Extract text nodes and class names or styles related to hero, title, subtitle, navigation, etc.
const fontMatch = content.match(/font-size:[^;}]+/g);
console.log('Font Sizes in page:', [...new Set(fontMatch)].slice(0, 30));

const letterSpacingMatch = content.match(/letter-spacing:[^;}]+/g);
console.log('Letter Spacings:', [...new Set(letterSpacingMatch)].slice(0, 30));

const maxW = content.match(/max-width:[^;}]+/g);
console.log('Max Widths:', [...new Set(maxW)].slice(0, 30));

const borderRad = content.match(/border-radius:[^;}]+/g);
console.log('Border Radii:', [...new Set(borderRad)].slice(0, 30));
