const isPangram = str => {
  // force input to become lower cased
  const strLowerCased = str.toLowerCase();

  // array of lower cased letters from the alphabet
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  // automatically returns false if the string is less than 26 characters
  if (str.length < 26) {
    return false;
  }

  // loop through the string
  for (let i = 0; i < strLowerCased.length; i++) {
    // if the alphabet has the current letter
    if (alphabet.includes(strLowerCased.charAt(i))) {
      // remove the letter from the alphabet
      alphabet.splice(alphabet.indexOf(strLowerCased.charAt(i)), 1);
    }
  }
  // returns true if alphabet does not have any letters
  return alphabet.length === 0 ? true : false;
};

let a = 'Watch Jeopardy, Alex Trebek"s fun tv quiz game';
let b = 'Five hexing wizard bots jump quickly';
let c = 'JavaScript is the best';
console.log('Watch Jeopardy, Alex Trebek"s fun tv quiz game', isPangram(a));
console.log('Five hexing wizard bots jump quickly', isPangram(b));
console.log('JavaScript is the best', isPangram(c));
