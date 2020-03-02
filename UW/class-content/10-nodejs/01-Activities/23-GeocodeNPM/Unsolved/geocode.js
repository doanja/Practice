// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require('node-geocoder');

// Replace with your mapquest consumer API key
var options = {
  provider: 'mapquest',
  apiKey: 'mqFLu953qzPz8uGylYHLAwc1Kj3nxG8E'
};

// Create a geocoder object that can query the mapquest API
var geocoder = NodeGeocoder(options);

// Take in the command line arguments
// create a copy of arguments
const copyOfArgs = [...process.argv];

// removed the first three arguments
let str = copyOfArgs.splice(0, 3);
// console.log('str :', str);
str = copyOfArgs.toString().replace(/,/g, ' ');
// console.log('str :', str);

// Build your address as an array or string

// Then use the geocoder object to search the address
// Or using Promise
const getGeocode = queryStr => {
  console.log('queryStr = ', queryStr);
  geocoder
    .geocode('29 champs elysée paris')
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    });
};

getGeocode(str);
