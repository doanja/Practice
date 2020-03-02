var Vehicle = function (name, color, speed) {
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
};

Vehicle.prototype.makeSound = function () {
  console.log("Vague vehicle sound");
};

Vehicle.prototype.start = function (direction) {
  this.direction = direction;
  this.isGoing = true;
};

Vehicle.prototype.stop = function () {
  this.isGoing = false;
};

Vehicle.prototype.update = function () {
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

Vehicle.prototype.printPosition = function () {
  console.log(this.name + " is at " + JSON.stringify(this.location));
};

Vehicle.prototype.canGoUp = function () {
  return false;
};

Vehicle.prototype.canGoDown = function () {
  return false;
};

var Plane = function (name, color, speed, make, engineCount) {
  Vehicle.call(this, name, color, speed);
  this.make = make;
  this.engineCount = engineCount;
};

Plane.prototype.canGoUp = function () {
  return true;
};

Plane.prototype.canGoDown = function () {
  return this.location.y >= this.speed;
};

Plane.prototype.makeSound = function () {
  console.log("Vrooom!");
}

Plane.prototype = Object.create(Vehicle.prototype);

Object.defineProperty(Plane.prototype, 'constructor', {
  value: Plane,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true
});