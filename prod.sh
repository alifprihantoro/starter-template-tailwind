hugo --minify -s blog
npx tailwind -i src/scss/main.scss -o ./public/main.css --postcss --minify
node ./app/babel.js
