//ASYNCHRONOUS - asyncrhonous needs callback


const { readFile, writeFile } = require('fs');
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        return console.log(err);
    }

    const firstTxt = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        const secondTxt = result;
        writeFile('./content/result-async.txt', `Here is the result: ${firstTxt} AND ${secondTxt}`, (err, result) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log('done with this task');
        }
        )
    })
})
console.log('starting next task');
