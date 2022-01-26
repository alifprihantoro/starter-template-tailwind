let postcss = require('postcss')
console.log(
postcss([autoprefixer]).process(result.css, { from: './src/style.css' }).then(res => {
 res.warnings().forEach(warn => {
  console.warn(warn.toString())
 })}))
