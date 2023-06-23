function show(cl) {
  return new cl(10);
}

let aa = show(
  class {
    constructor(a) {
      this.number = a;
    }
    hello() {
      console.log("Hiyo");
    }
  }
);

aa.hello();
