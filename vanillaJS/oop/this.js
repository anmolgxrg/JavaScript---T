// var a = {
//   rollno: 111,
//   showresult: function () {
//     console.log("result of ", this.rollno);
//   },
// };

// a.showresult();

// function hello() {
//   console.log(this);
// }
// var d = 33;
// console.log(window.d);
// hello();
// function hello(a,b=a,c=b+a)
// {
//     console.log(a,b,c);
// }
// hello(1);

// var a= (function (d, e) {
//     return d + e;
//   })(2,3);
//   console.log(a);
// console.log(
//   (function (d, e) {
//     return d + e;
//   })(4, 9)
// );
//yahan counter is not defined fir bhi js mein value print ho jayegi
// function dd() {
//   "use strict";
//   counter = 10;
//   return counter;
// }
// console.log(dd());

// setTimeout(function () {
//   console.log("called after 5 sec");
// }, 5000);
// console.log("hello")

// const ob = {
//   rollno: 111,
//   course: "btech",
//   show: function () {
//     console.log(`rollno ${this.rollno}`);
//   },
// };

// newob = {
//   rollno: 222,
// };
// const show = function (mess) {
//   console.log(mess);
//   console.log(this.rollno + "," + this.course);
// };
// console.log(show.length, show.prototype);
// show.apply(ob, ["how are you"]);
// show.call(ob, "i am fine");
// ob.show();
// newshow = ob.show.bind(newob);
// newshow();

// function a(number) {
//   var flag = true;

//   function b() {
//     for (var i = 2; i <= number / 2; i++) {
//       if (number % i === 0) {
//         flag = false;
//         break;
//       }
//     }
//   }

//   if (flag) {
//     var cb = Math.pow(number, 3);
//     return cb;
//   } else {
//     return number + " is not prime";
//   }
// }

// console.log(a(13));

function a(number) {
  function sq() {
    number = Math.pow(number, 2);
    return number;
  }

  function cube() {
    number = Math.pow(number, 3);
    return number;
  }

  if (number % 2 === 0) {
    return sq;
  } else {
    return cube;
  }
}

console.log(a(13)());
