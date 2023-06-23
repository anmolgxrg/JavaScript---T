// function *one()
// {
//     yield console.log("one");
//     yield 3;
//     yield console.log("two");
//     yield console.log("three");
//     yield console.log("alt tab");
// }
// o=one();
// for(let cc of o)
// {
//     console.log(cc);
// }
// o.next();
// console.log(o.next().value);

function* go() {
  let c = yield "what is 2+2?";
  console.log("first", c);
  let cc = yield "what is 3+3?";
  console.log("second :", cc);
}

let o = go();
console.log(o.next().value);
console.log(o.next(4).value);
console.log(o.next(6).value);
// o.next(6);
