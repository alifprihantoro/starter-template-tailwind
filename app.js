var chokidar = require("chokidar");
const { exec } = require('child_process');

// // babel
// require('./app/babel.js')

exec('hugo serve --minify -s blog');
exec('npx tailwind -i src/scss/main.scss -o ./public/main.css --postcss --minify')
// exec('live-server blog/public')
const watcher = chokidar.watch(['src'], {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  ignoreInitial: true,
});

// start watch
watcher
  .on("change", (path, stats) => {
c_url_scss = path.match(/src\/scss/);
c_url_js = path.match(/src\/js/);
if (c_url_scss != null) {
  console.log('scss change')
  exec('npx tailwind -i src/scss/main.scss -o ./public/main.css --postcss --minify')
}  else if (c_url_js != null ){
  console.log('js change')
  require('./app/babel.js')
} 
    console.log(`File ${path} changed size to ${stats.size}`);
// exec('hugo --minify')
// exec('npx tailwind -i src/scss/main.scss -o ./public/main.css --postcss --minify')
  })
  .on("add", (path) => {
if (c_url_scss != null) {
  console.log('scss change')
  exec('npx tailwind -i src/scss/main.scss -o ./public/main.css --postcss --minify')
}  else if (c_url_js != null ){
  console.log('js change')
  require('./app/babel.js')
} 
// exec('hugo --minify')
// exec('npx tailwind -i src/scss/main.scss -o ./public/main.css --postcss --minify')
console.log(`File ${path} has been added`)
  });
