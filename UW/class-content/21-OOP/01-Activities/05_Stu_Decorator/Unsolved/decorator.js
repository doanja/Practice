; (function () {
  /**
   * DECORATOR:
   * 
   *  - Attach additional responsibilities to an object dynamically. 
   *      Decorators provide a flexible alternative to subclassing for extending functionality.
   *  - Client-specified embellishment of a core object by recursively wrapping it.
   *  - Wrapping a gift, putting it in a box, and wrapping the box.
   *  - kinda like pre- and/or post-processing of an already established method
   */
  class Computer {
    constructor(buildId) {
      this.id = buildId;
    }

    cost() {
      return 1000;
    }

    screenSize() {
      return 15.6;
    }
  }

  // Decorator 1
  function memory(computer) {
    var v = computer.cost();
    computer.cost = function () {
      return v + 75;
    };
  }

  // Decorator 2
  function engraving(computer) {
    var v = computer.cost();
    computer.cost = function () {
      return v + 200;
    };

  }

  // Decorator 3
  function insurance(computer) {
    var v = computer.cost();
    computer.cost = function () {
      return v + 250;
    };
  }

  const myCPU = new Computer("john-0001");
  memory(myCPU);
  engraving(myCPU);
  insurance(myCPU);

  // update display
  console.log(myCPU.cost());
  document.getElementById("cost").textContent = myCPU.cost();
  document.getElementById("screenSize").textContent = myCPU.screenSize();
})()