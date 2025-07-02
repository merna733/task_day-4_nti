
export class Shape {
  constructor(name) {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate abstract class Shape");
    }
    this.name = name;
  }

  getArea() {
    throw new Error("getArea must be implemented in subclass");
  }

  getPerimeter() {
    throw new Error("getPerimeter must be implemented in subclass");
  }

  toString() {
    return `${this.name} → Area = ${this.getArea().toFixed(2)}, Perimeter = ${this.getPerimeter().toFixed(2)}`;
  }
}

export class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

export class Square extends Shape {
  constructor(side) {
    super("Square");
    this.side = side;
  }

  getArea() {
    return this.side * this.side;
  }

  getPerimeter() {
    return 4 * this.side;
  }
}

export class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}
