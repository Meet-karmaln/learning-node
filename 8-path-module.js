const path = require("path");

console.log(path.sep);

const filepath = path.join("/content", "subcontent", "text.txt");
const filepath2 = path.join("/content", "/subcontent", "/text.txt");
console.log(filepath2);

const basename = path.basename(filepath);
console.log(basename);

const absPath = path.resolve(__dirname, "content", "subcontent", "text.txt");
console.log(absPath);
