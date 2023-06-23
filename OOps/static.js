class greet {
  static msg = "hello";
  constructor() {
    this.msg2 = "Hi";
  }
  static show() {
    console.log("Say " + this.msg2);
  }
}
var object = new greet();
greet.show();
