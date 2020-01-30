class Triangle {
  constructor(sideLength, sides) {
    this.sideLength = sideLength;
    this.sides = sides;
  }

  area() {
    return (Math.sqrt(3) / 4) * Math.pow(this.sideLength, 2);
  }

  perimeter() {
    return this.sides * this.sideLength;
  }

  getSides() {
    return this.sides;
  }
}

class Rectangle {
  constructor(sideLength, sides) {
    this.sideLength = sideLength;
    this.sides = sides;
  }

  area() {
    return this.sideLength * 4;
  }

  perimeter() {
    return this.sides * this.sideLength;
  }

  getSides() {
    return this.sides;
  }
}
