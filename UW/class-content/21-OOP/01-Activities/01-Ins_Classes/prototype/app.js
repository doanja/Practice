/**
 * This is an IIFE
 * An immediately invoked function expression (or IIFE, pronounced "iffy")
 * is a JavaScript programming language idiom which produces a lexical scope
 * using JavaScript's function scoping 
 */
; (function (Vehicle, Plane) {
  var vehicles;


  function init() {
    vehicles = [
      new Plane("747", "blue", 300, "Boeing", 4),
      new Plane("MD-80", "red", 400, "McDonnell Douglas", 2)
    ];
    report();
    randomStart();
    listenForKey();
  }

  function report() {
    vehicles.forEach(function (v) {
      v.printPosition();
    });
  }

  function randomStart() {
    vehicles.forEach(function (v) {
      while (v.isGoing === false) {
        var direction = randomDirection();
        switch (direction) {
          case "n":
          case "w":
          case "e":
          case "s":
            v.start(direction);
            break;
          case "u":
            if (v.canGoUp()) {
              v.start(direction);
            }
            break;
          case "d":
            if (v.canGoDown()) {
              v.start(direction);
            }
        }
      }
    });
  }

  function listenForKey() {
    document.addEventListener("keyup", function (e) {
      vehicles.forEach(function (v) {
        v.update();
        v.makeSound();
        console.log(v.constructor.name);
      });
    })
  }

  function randomDirection() {
    var directions = ["n", "w", "s", "e", "u", "d"];
    return directions[Math.floor(Math.random() * Math.floor(6))];
  }

  init();

})(Vehicle, Plane)