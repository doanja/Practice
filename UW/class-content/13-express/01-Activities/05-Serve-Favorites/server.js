const http = require('http');
const fs = require('fs');
const PORT = 8080;

const server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log('Server listening on: http://localhost:' + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {
  // Capture the url the request is made to
  const path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {
    case '/':
      return displayHome(res);

    case '/food.html':
      return displayFood(res);

    case '/movies.html':
      return displayMovies(res);

    case '/css.html':
      return displayCSS(res);

    default:
      return display404(path, res);
  }
}

// When someone visits the "http://localhost:8080/" path, this function is run.
function displayHome(res) {
  fs.readFile(__dirname + '/home.html', (err, data) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

// When someone visits the "http://localhost:8080/food" path, this function is run.
function displayFood(res) {
  fs.readFile(__dirname + '/food.html', (err, data) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

// When someone visits the "http://localhost:8080/food" path, this function is run.
function displayMovies(res) {
  fs.readFile(__dirname + '/movies.html', (err, data) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

// When someone visits the "http://localhost:8080/food" path, this function is run.
function displayCSS(res) {
  fs.readFile(__dirname + '/css.html', (err, data) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

// When someone visits any path that is not specifically defined, this function is run.
function display404(url, res) {
  const myHTML =
    '<html>' +
    '<body><h1>404 Not Found </h1>' +
    '<p>The page you were looking for: ' +
    url +
    ' can not be found</p>' +
    '</body></html>';

  // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
  res.writeHead(404, { 'Content-Type': 'text/html' });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}
