const fs = require('fs');
const path = require('path');

// // Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if(err) throw err;
//     console.log('folder created...)');
// });

// // Create and write to file, and overwrites the whole file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
//  'Hello World!', // text to be added to the file
//     (err) => {
//         if(err) throw err;
//         console.log('file written to');

//         // Create and write to file
//         fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 
//         ' i love cold!', // text to be appended
//         (err) => {
//             if(err) throw err;
//             console.log('file written to');
//         }
//         );
//     }
// );

// // Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data) => {
//     if(err) throw err;
//     console.log(data);
// });

// Read file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
    if(err) throw err;
    console.log('file renamed...');
});