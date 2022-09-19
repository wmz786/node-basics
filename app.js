const EventEmitter = require("node:events");

const customEvent = new EventEmitter();

customEvent.on("response", () => {
  console.log("data received");
});

customEvent.emit("response");
