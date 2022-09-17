// console.log(__filename);
// console.log(__dirname);
// console.log(require);
// console.log(process);
// console.log(module);

const names = require("./names");
const sayHi = require("./utils");
const alt = require("./alternative");

console.log(alt);
sayHi(names.ahmad);
sayHi(names.john);
