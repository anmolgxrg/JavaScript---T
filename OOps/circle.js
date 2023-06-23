class Circle {
  #radius;

  constructor(radius) {
    this.#radius = radius;
  }

  get radius() {
    return this.#radius;
  }

  set radius(a) {
    console.log("called for" + a);
    if (typeof a == "number" && a > 0) {
      this.#radius = a;
    } else throw "Radius must be positive and a number.";
  }

  get area() {
    return Math.PI * Math.pow(this.#radius, 2);
  }

  #show() {
    console.log("in show");
  }
  call1(){
    this.#show()
  }
}

var circle = new Circle(5);
console.log(circle.radius);
console.log(circle.area);


console.log(circle.call1());

// circle.radius = 2;
// console.log(circle.radius);

// console.log(circle.area);
