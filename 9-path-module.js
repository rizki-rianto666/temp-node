const path = require('path');
console.log(path.sep);//console specific seperator, namely '\'

const filePath = path.join('/content', 'subfolder', 'test.txt') //joining the folder with seperator
console.log(filePath)//==> content\subfolder\test.txt

const base = path.basename(filePath);//Jumpi in to the base path inside the parameter, in this case test.txt where is the end or base path we assign in filPath above.
console.log(base); //==> test.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');//this works the same as path.join
console.log(absolute)

console.log(path.resolve('./content/second.txt'))