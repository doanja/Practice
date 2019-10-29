const http = require('http');

// create server object
http.createServer((request, response) => {
    // write a reponse when request has been made
    response.write('hello world');
    response.end();
})
.listen(5000, () => console.log('server is running...'));

// when http_demo is run, and you visit http://localhost:5000/
// you will see that the server is running