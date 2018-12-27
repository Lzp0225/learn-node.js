const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.write('hello node.js~')
    res.end()
}).listen(2018)