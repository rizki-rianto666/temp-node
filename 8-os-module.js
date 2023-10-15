const { log } = require('console');
const os = require('os'); //built-in module os

//info about current user
const user = os.userInfo();
console.log(user);

//mtehod returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOS);