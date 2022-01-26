const fs = require("fs");
let config =[]; 

config.push(fs.readFileSync('blog/config/site.toml', "utf8"));

fs.writeFileSync('blog/config.toml', config);
