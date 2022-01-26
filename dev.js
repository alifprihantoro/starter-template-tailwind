const { exec } = require('child_process');

exec('hugo --minify && node api.js');
// exec('TAILWIND_MODE=watch npx tailwind -i src/scss/main.scss -o ./static/main.css --postcss --minify --watch')
exec('hugo serve --minify')
