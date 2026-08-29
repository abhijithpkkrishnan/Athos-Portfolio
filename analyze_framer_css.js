import fs from 'fs';

const css = fs.readFileSync('athos_extracted_styles.css', 'utf8');

// Find all CSS root variables
const vars = css.match(/--[a-zA-Z0-9_-]+:\s*[^;\}]+/g) || [];
console.log('--- CSS VARIABLES ---');
console.log([...new Set(vars)].slice(0, 50));

// Find keyframes
const keyframes = css.match(/@keyframes\s+[a-zA-Z0-9_-]+/g) || [];
console.log('\n--- KEYFRAMES ---');
console.log([...new Set(keyframes)]);

// Find font family definitions
const fonts = css.match(/font-family:[^;\}]+/g) || [];
console.log('\n--- FONT FAMILIES ---');
console.log([...new Set(fonts)].slice(0, 20));

// Find background properties
const bgProps = css.match(/background:[^;\}]+|background-color:[^;\}]+/g) || [];
console.log('\n--- BACKGROUND PROPS ---');
console.log([...new Set(bgProps)].slice(0, 30));
