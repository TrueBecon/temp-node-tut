const { log } = require("console");
const os = require("os");

//info about the current user

//method returns the system uptime in seconds
const uptime = os.uptime();
const user = os.userInfo();
console.log(uptime);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
