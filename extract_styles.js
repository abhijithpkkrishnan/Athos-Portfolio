import https from 'https';

https.get('https://athos.framer.website/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Find all css file links or inline styles
    const styles = data.match(/background[^;\}"]+/g) || [];
    console.log('Background styles found:', [...new Set(styles)].slice(0, 30));
    
    const colors = data.match(/#[0-9a-fA-F]{3,8}|rgba?\([^\)]+\)/g) || [];
    console.log('Unique colors found:', [...new Set(colors)].slice(0, 40));
  });
});
