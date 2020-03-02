var expect = require("chai").expect;
var titleize = require("../titleize");

describe("Titleize", function() {
  it("should titleize properly when passed a string", function() {
    expect(titleize("mr jones")).to.equal("Mr Jones");
  });

  it("should pas with strings and numbers", function() {
    expect(titleize("alsjfd asdjfli aSDFJ asldfj lsadjfi F")).to.equal("Alsjfd Asdjfli ASDFJ Asldfj Lsadjfi F"
    );
  });
});
