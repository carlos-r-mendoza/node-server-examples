const http = require('http'); // native to node

const server = http.createServer((request, response) => {
    // GET root route
    if(request.url === '/' && request.method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'text/html' }); // specify status code and other headers
        response.end('Hello World, this is the <strong>http native Node module</strong> in action!'); // response body and end connection
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' }); // specify status code and other headers
        response.end('Sorry, invalid request!'); // response body and end connection
    }
})

server.listen(8080);
console.log('Listening on port 8080...');