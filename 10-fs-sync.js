const { log } = require('console');
const { readFileSync, writeFileSync } = require('fs');
//{readFileSync} = require('fs') is the same as readFileSync = require('fs').readFileSync();
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')



writeFileSync('./content/result-sync.txt', `\nHere is the result ${first} ${second}`, { flag: 'a' }) //this function writes something (specified path-file or create the file, things we want to write inside of that file)
//adding object flag:a will append the result to the file instead of just override it
console.log('done with this task');
console.log('starting the next one');