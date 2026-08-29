import fs from 'fs';

const content = fs.readFileSync('/home/dit/Desktop/Desktop Files/Abhi portfolio/Abhijith_Nodejs.pdf', 'utf8');
const linkedinMatches = content.match(/linkedin\.com\/in\/[^\s\>\)\"]+/gi) || content.match(/https?:\/\/[^\s\>\)\"]*linkedin[^\s\>\)\"]*/gi) || [];
console.log('LinkedIn URLs found in PDF:', linkedinMatches);

// Also search for raw strings with 'linkedin'
const strings = content.match(/linkedin[^\s\/]*\/[^\s\)]+/gi) || [];
console.log('Other linkedin strings:', strings);
