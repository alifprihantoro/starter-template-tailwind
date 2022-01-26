var chokidar = require("chokidar");
const { exec } = require('child_process');

exec('hugo --minify && node api.js');
exec('npx tailwind -i src/scss/main.scss -o ./public/main.css --postcss --minify')
exec('live-server public')
// exec('live-server public')
const watcher = chokidar.watch("themes", {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  ignoreInitial: true,
});

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
// process.exit()

console.log('Press any key to exit');

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data',function(){
console.log('youre going exit')
process.exit()
// process.exit.bind(process, 0)
} );
