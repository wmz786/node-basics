const { readFileSync, writeFileSync } = require("node:fs");

console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);
console.log("done with this task");

writeFileSync("./content/result-sync.txt", `Result : ${first} , ${second}`, {
  flag: "a",
});

console.log("start a new task");
