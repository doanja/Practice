// console.log("hello from node.js...");
// const person = require('./person.js');  // refers to the current director, and person.js file
// console.log(person);

const Person = require('./person');
const person1 = new Person('John Doe', 30);
person1.greeting();