const EventEmitter = require("node:events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (user, id) => {
  console.log(`data received user ${user} with id: ${id}`);
});

customEmitter.on("response", () => {
  console.log(`some other logic`);
});

customEmitter.emit("response", "ahmad", 12);
