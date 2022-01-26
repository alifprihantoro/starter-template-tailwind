var chokidar = require("chokidar");
const { exec } = require('child_process');

// // babel
// require('./app/babel.js')

exec('hugo --minify -s blog');
exec('npx tailwind -i src/scss/main.scss -o ./public/main.css --postcss --minify')
exec('live-server blog/public')
// exec('live-server public')
const watcher = chokidar.watch(['blog/config.toml','blog/layouts','blog/content','src'], {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  ignoreInitial: true,
});

// start watch
watcher
  .on("change", (path, stats) => {
    // url = path.match(/fd/);
    // if (url != null) {
    //   console.log("ada");
    // } else {
    //   console.log("tidak ada");
    // }
    console.log(`File ${path} changed size to ${stats.size}`);
exec('hugo --minify')
exec('npx tailwind -i src/scss/main.scss -o ./public/main.css --postcss --minify')
  })
  .on("add", (path) => {
exec('hugo --minify')
exec('npx tailwind -i src/scss/main.scss -o ./public/main.css --postcss --minify')
console.log(`File ${path} has been added`)
  });
