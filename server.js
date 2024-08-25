const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const requestHandler = (req, res) => {
    console.log(`Request for ${req.url} received.`);
    
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Server Error');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
