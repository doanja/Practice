class Vehicle {
  constructor(name, color, speed) {
    this.name = name;
    this.color = color || "no color given";
    this.location = {
      x: 0,
      y: 0,
      z: 1
    }
    this.isGoing = false;
    this.direction = "n";
    this.speed = speed;
  }

  makeSound() {
    console.log("Vague vehicle sound");
  };

  start(direction) {
    this.direction = direction;
    this.isGoing = true;
  };

  stop() {
    this.isGoing = false;
  };

  update() {
    if (this.isGoing) {
      switch (this.direction) {
        case "n":
          this.location.y = this.location.y + this.speed;
          break;
        case "w":
          this.location.x = this.location.x + this.speed;
          break;
        case "s":
          this.location.y = this.location.y - this.speed;
          break;
        case "e":
          this.location.x = this.location.x - this.speed;
          break;
        case "u":
          if (this.canGoUp) {
            this.location.z = this.location.z + this.speed;
          }
          break;
        case "d":
          if (this.canGoUp && this.location.z >= this.location.z + this.speed) {
            this.location.z = this.location.z + this.speed;
          }
          break;
      }
    }

    this.printPosition();
  };

  printPosition() {
    console.log(this.name + " is at " + JSON.stringify(this.location) + "...");
  };

  canGoUp() {
    return false;
  };

  canGoDown = function () {
    return false;
  };
}

class Plane extends Vehicle {
  constructor(name, color, speed, make, engineCount) {
    super(name, color, speed);
    this.make = make;
    this.engineCount = engineCount;
  }

  makeSound() {
    console.log("Vrooom!");
  }

  canGoUp() {
    return true;
  };

  canGoDown() {
    return this.location.y >= this.speed;
  };
}

class Car extends Vehicle {
  constructor(name, color, make, model, transmission) {
    super(name, color, 30);
    this.make = make;
    this.model = model;
    this.transmission = transmission;
  }

  makeSound() {
    console.log("Vrooom!");
  }

  update() {
    super.update();
    console.log("I am a car. I am special");
  }
}