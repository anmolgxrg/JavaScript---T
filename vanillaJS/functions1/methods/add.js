// function add(...a) {
//   var sum = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//     return sum;
//   }
// }

function add(...a) {
  var sum = 0;
  for (b of a)
  sum += b;
  return sum;
}

var a = [1, 2, 3, 4, 5, 6];
console.log(add(...a));
