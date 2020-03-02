const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
      console.log(body);
      res.end('ok');
    });
  } else {
    displayHome(res);
  }
});

server.listen(3000);

// When someone visits the "http://localhost:8080/" path, this function is run.
function displayHome(res) {
  fs.readFile(__dirname + '/index.html', (err, data) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}
