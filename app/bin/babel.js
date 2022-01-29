import fs from 'fs'
import babel from '@babel/core'

// file params
let js_file=[
  './assets/js/main.js',
  './assets/js/ts.js',
]
// merger code
let source=[]

// read file and push to source
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
// console.log(code)

// write result to file/folder destination
fs.writeFileSync('assets/main.js', code);
