// var str = "name:anmol, rollno:23";

class one {
  constructor(r, n) {
    this.rollno = r;
    this.name = n;
  }

  static ObjectfromString(s) {
    var res = s.split(":");
    console.log(res);
    return new one(res[0], res[1]);
  }
}

// var obj = new one();
var c = one.ObjectfromString("100:ram");
console.log(c);
