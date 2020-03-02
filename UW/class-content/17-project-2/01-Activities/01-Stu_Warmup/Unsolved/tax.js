var calculateTax = function(price) {
  // Fill in code here
  if (typeof price !== "number") {
    throw new Error("price is not a number");
  } else {
    // console.log(Math.round(price * 1.08 * 100) / 100).toFixed(2);
    return parseFloat((price * 1.08).toFixed(4));
  }
};

module.exports = calculateTax;
