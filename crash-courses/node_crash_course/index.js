// console.log("hello from node.js...");
// const person = require('./person.js');  // refers to the current director, and person.js file
// console.log(person);

// const Person = require('./person');
// const person1 = new Person('John Doe', 30);
// person1.greeting();

// logger.js
// const Logger = require('./logger'); // reference the logger from logger.js
// const logger = new Logger();    // instantiate logger
// logger.on('message', (data) => console.log("Called Listener:", data));
// logger.log('Hello World');
// logger.log('za warudo');
// logger.log('bye bye');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((request, response) => {
    // // if you go to http://localhost:5000/about, the console will log /about
    // if(request.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if(err) throw err;
    //         response.writeHead(200, {'Content-Type': 'text/html'});
    //         // live update: https://youtu.be/fBNz5xF-Kx4?list=WL&t=3942
    //         response.end(content);
    //     })
        
    // }

    // if(request.url === '/api/users'){
    //     const users = [
    //         { name: 'bob smith', age: 40 },
    //         { name: 'fred man', age: 21 },
    //     ];
    //     response.writeHead(200, {'Content-Type': 'application/json'});
    //     response.end(JSON.stringify(users));
    // }
    
    // Build file path
    let filePath = path.join(
        __dirname, 
        'public', 
        request.url === '/' ? 'index.html' : request.url
    );
    
    // extension of file
    let extname = path.extname(filePath);

    // initial content Type
    let contentType = 'text/html';

    // check ext and set content type
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.json':
            contentType = 'application/json';
            break;
    }

    // read file
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT'){
                // page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err,content) => {
                    response.writeHead(200, {'Content-Type' : 'text/html'});
                    response.end(content, 'utf8');
                })
            } else { // if different error code (not enoent)
                // some server error
                response.writeHead(500);
                response.end(`Server Error: ${err.code}`);
            }
        } else {
            // success
            response.writeHead(200, {'Content-Type' : contentType});
            response.end(content, 'utf8');
        }
    })
});

// port number not always 5000, so its default enviroment variable
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));