const favoriteBand = require('./bands.js');

// console.log(favoriteBand.bands.punk);
let result = '';
for (band in favoriteBand.bands) {
  result += band + ' ';
}

console.log('result :', result);
