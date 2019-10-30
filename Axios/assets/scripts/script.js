const getAPI = () => {
  // the url past to the request header
  const url = 'http://www.omdbapi.com/?apikey=trilogy&t=nemo';

  // send a GET request to the complex endpoint
  // https://spoonacular.com/food-api/docs#Search-Recipes-Complex
  $.ajax({
    url,
    method: 'GET'
  })
    .then(res => {
      console.log('res :', res);
    })
    .catch(err => console.log('Error occured searching for ' + searchTerm + ' ' + err));
};

// getAPI();

/**
 * function to determine if a string is a valid password containing
 * at least one upper case letter, at least one lower case letter,
 * and at least 8 characters long
 * @param {string} str the input string
 */
const isValidPassword = str => {
  // (?=.*[a-z]) checks for lower case letters
  // (?=.*[A-Z]) checks for upper case letters
  // (?=.{8,}) checks for length 8 characters
  const reg = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.{8,})');
  return reg.test(str);
};

console.log('isValidPassword("RexTheDog") :', isValidPassword('RextheDog'));
console.log('isValidPassword("rexthedog") :', isValidPassword('rexthedog'));
console.log('isValidPassword("REXTHEDOG") :', isValidPassword('REXTHEDOG'));
console.log('isValidPassword("Dog") :', isValidPassword('Dog'));
