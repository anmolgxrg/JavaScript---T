class one {
  constructor(msg) {
    console.log(msg);
  }
}
class two {
  constructor(msg2) {
    console.log(msg2);
  }
}

class three extends one {
  constructor(msg3) {
    // console.log(msg2);
    super(msg3);
    console.log(msg3);
  }
}

// class four implements two{

// }

// class five inherits two{

// }

var obj = new three("Hi");
obj;
console.log(typeof one);
console.log(typeof obj);
