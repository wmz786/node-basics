const { readFileSync, writeFileSync } = require("node:fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);

writeFileSync("./content/result-sync.txt", `Result : ${first} , ${second}`, {
  flag: "a",
});
