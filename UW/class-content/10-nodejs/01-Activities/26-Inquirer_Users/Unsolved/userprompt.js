// Load the NPM Package inquirer
const inquirer = require('inquirer');
// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text.
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: 'input',
      message: 'What is your hair color?',
      name: 'haircolor'
    },
    // Here we create a basic password-protected text prompt.
    {
      type: 'password',
      message: 'Set your password',
      name: 'password'
    },
    // Here we give the user a list to choose from.
    {
      type: 'list',
      message: 'What is your favorite pizza place?',
      choices: ['pizza hut', 'little caesers', 'dominos'],
      name: 'pizzaPlace'
    },

    {
      type: 'checkbox',
      message: 'What toppings do you want on your pizza?',
      choices: ['cheese ', 'pepperoni ', 'olives '],
      name: 'pizzaTopping'
    },
    // Here we ask the user to confirm.
    {
      type: 'confirm',
      message: 'Are you sure:',
      name: 'confirm',
      default: true
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's haircolor and pizzaPlace from the answers.
    if (inquirerResponse.confirm) {
      console.log('\nNice ' + inquirerResponse.haircolor + ' colored hair.');
      console.log('\nYour ' + inquirerResponse.pizzaPlace + ' is my favorite place too!');
      console.log('\nI like ' + inquirerResponse.pizzaTopping + ' on my pizza too.');
    } else {
      console.log('\nYour ' + inquirerResponse.haircolor + ' colored hair is ugly.\n');
    }
  });
