const fs = require("fs");
var babel = require("@babel/core");


const filename = "./src/js/main.js";
const source = fs.readFileSync(filename, "utf8");

// Load and compile file normally, but skip code generation.
const { ast } = babel.transformSync(source, {
  filename,
  ast: true,
  code: false,
});

// Minify the file in a second pass and generate the output code here.
const { code, map } = babel.transformFromAstSync(ast, source, {
  filename,
  presets: ["minify"],
  babelrc: false,
  configFile: false,
});
console.log(code)
