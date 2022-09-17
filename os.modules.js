const os = require("node:os");

const info = {
  type: os.type(),
  version: os.version(),
  user: os.userInfo(),
  uptime: os.uptime(),
  arch: os.arch(),
  CPU: os.cpus(),
  freeMemory: os.freemem(),
  totalMemory: os.totalmem(),
  hostName: os.hostname(),
  platform: os.platform(),
  loadavg: os.loadavg(),
};

console.log(info);
