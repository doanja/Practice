// 1. Update this function to use a short circuit evaluation to set a default value for `message` to "Hello World!"
// Think back to node and how we set a PORT 😉

const logMessage = message => {
  if (!message && 1) {
    message = 'Hello World!';
  }
  console.log(message);
};

logMessage();

// 2. Update the code below to set `message` using a ternary expression (variable = conditional ? value : otherValue)

const logTired = beenWorkingAllDay => {
  beenWorkingAllDay == true
    ? console.log("I'm feeling really tired")
    : console.log("I'm wide awake!");
};

logTired(false);
