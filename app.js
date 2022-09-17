const path = require("node:path");

const sep = path.sep;
console.log(sep);

// separators doesn't count
const filePath = path.join("/something///", "subfolder", "text.txt");
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName);

const absolute = path.resolve(__dirname, "something", "sub");
console.log(absolute);
