const http = require('http');//http module
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to Our Homepage, Capt')
    }
    if (req.url === '/about') {
        res.end('OUR SHORT HISTORY')
    };

    res.end(`
    <h1>Ooops!</h1>
        <p>We can't find the page you are looking for</p>
        <a href="/">Back Home</a>`)
})

server.listen(5000);//port we make to use in browser