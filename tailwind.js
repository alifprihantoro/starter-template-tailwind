const { exec } = require('child_process');
const css=exec('npx postcss src/style.css')
console.log(css)
