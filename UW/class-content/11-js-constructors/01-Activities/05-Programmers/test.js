const inquirer = require('inquirer');

// constructor function used to create programmer objects
function Programmer(name, position, age, language) {
  this.name = name;
  this.position = position;
  this.age = age;
  this.language = language;
  // creates the printInfo method and applies it to all programmer objects
  this.printInfo = function() {
    console.log('Name: ' + this.name + '\nPosition: ' + this.position + '\nAge: ' + this.age + '\nLanguages: ' + this.language);
  };
}

const prompt = () => {
  inquirer
    .prompt([
      {
        name: 'name',
        message: 'Please enter a programmer name'
      },
      {
        name: 'position',
        message: 'Please enter a programmer position'
      },
      {
        name: 'age',
        message: 'Please enter a programmer age'
      },
      {
        name: 'language',
        message: 'Please enter a programmer language'
      }
    ])
    .then(function(inqResponse) {
      let newProgrammer = new Programmer(inqResponse.name, inqResponse.position, inqResponse.age, inqResponse.language);

      newProgrammer.printInfo();
    });
};
