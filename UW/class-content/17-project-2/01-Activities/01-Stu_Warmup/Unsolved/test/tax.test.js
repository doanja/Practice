var expect = require("chai").expect;
var calculateTax = require("../tax");

// Write tests for the calculateTax function here
describe("calculateTax", function() {
  it("should calculate the tax and format the decimal places to 2", function() {
    expect(calculateTax(1)).to.equal(1.08);
  });

  it("should calculate the tax and format the decimal places to 2", function() {
    expect(calculateTax(4)).to.equal(4.32);
  });

  it("should calculate the tax and format the decimal places to 2", function() {
    expect(calculateTax(0)).to.equal(0);
  });

  it("should throw when not passed numbers", function() {
    expect(function() {
      multiply("1");
    }).to.throw(Error);
  });

  it("should throw when no price has been passed in", function() {
    expect(function() {
      multiply();
    }).to.throw(Error);
  });
});
