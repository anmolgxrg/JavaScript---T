class student {
  constructor(r, n) {
    this._rollno = r;
    this.name = n;
  }

  details() {
    console.log("my rollno is" + this.rollno + "and my name is" + this.name);
  }

  // set rollno(a) {
  //   console.log("setting rollno" + a);
  //   if (a < 0) {
  //     throw "value not proper";
  //   } else this._rollno = a;
  // }

  get rollno() {
    return this._rollno;
  }
}

try {
  s1 = new student(10, "hello");
  s1.rollno = 20;
  s1.details();

} catch (e) {
  console.log("error" + e);
}

// let s1 = new student();
