class Emp {
  name = "superclass";
  constructor(name1) {
    this.showDetails();
  }
  showDetails() {
    console.log("this is superclass");
  }
}

class Manager extends Emp {
  name = "subclass";
  showDetails() {
    console.log("this is subclass");
  }
}
var one = new Emp("abc");
var two = new Manager("anmol");
