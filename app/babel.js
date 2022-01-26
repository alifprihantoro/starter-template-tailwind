const fs = require("fs");
var babel = require("@babel/core");

let js_file=[
  './src/js/main.js',
  './src/js/ts.js',
]  
let source=[]
js_file
  .forEach(e=>{
    // console.log(e)
    source.push(fs.readFileSync(e,'utf8'))
})
// console.log(source)

// Load and compile file normally, but skip code generation.
const { ast } = babel.transformSync(source, {
  ast: true,
  code: false,
});

// Minify the file in a second pass and generate the output code here.
const { code, map } = babel.transformFromAstSync(ast, source, {
  presets: ["minify"],
  babelrc: false,
  configFile: false,
});
console.log(code)
// fs.writeFileSync('blog/public/main.js', code);
