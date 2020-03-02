const checkArgs = args => {
  if (args[3] === 'undefined' || args[4] === 'undefined') {
    return true;
  }

  return false;
};

const calcArgs = arr => {
  if (checkArgs(arr)) {
    return 'NaN';
  } else {
    const num1 = parseInt(arr[3]);
    const num2 = parseInt(arr[4]);

    switch (arr[2]) {
      case 'add':
        console.log('test');
        return num1 + num2;

      case 'subtract':
        return num1 - num2;

      case 'multiply':
        return num1 * num2;

      case 'divide':
        return num1 / num2;

      case 'remainder':
        return num1 % num2;

      case 'exp':
        return Math.pow(num1, num2);

      default:
        console.log('hello');
        break;
    }
  }
};

console.log(calcArgs(process.argv));

// console.log(process.argv[3]);
