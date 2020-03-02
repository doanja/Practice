// As always, we grab the fs package to handle read/write.
var fs = require('fs');

const updateBankAmount = (amount = process.argv[2]) => {
  // Next, we append the text into the "sample.txt" file.
  // If the file didn't exist, then it gets created on the fly.
  fs.appendFile('bank.txt', ', ' + amount, function(err) {
    // If an error was experienced we will log it.
    if (err) {
      console.log(err);
    }

    // If no error is experienced, we'll log the phrase "Content Added" to our node console.
    else {
      console.log('Bank Action Successful!');
    }
  });
};

const getBankAmount = () => {
  // This block of code will read from the "movies.txt" file.
  // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
  // The code will store the contents of the reading inside the variable "data"
  fs.readFile('bank.txt', 'utf8', function(error, data) {
    let sum = null;
    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
    // Then split it by commas (to make it more readable)
    var dataArr = data.split(',');

    for (let i = 0; i < dataArr.length; i++) {
      sum += parseFloat(dataArr[i]);
    }
    console.log('Total :', sum);
  });
};

const runLottery = () => {
  return Math.floor(Math.random() * 10);
};

const lookupCommand = arguments => {
  switch (arguments[2]) {
    case 'total':
      getBankAmount();
      break;

    case 'deposit':
      updateBankAmount(arguments[3]);
      break;

    case 'withdraw':
      updateBankAmount('-' + arguments[3]);
      break;

    case 'lotto':
      return num1 / num2;

    default:
      console.log('enter a valid command...');
      break;
  }
};

// updateBankAmount(process.argv[2]);
lookupCommand(process.argv);
