var arr = [1, 2, 3, 4, 5, 5, 1];

var leftSum = 0;
var rightSum = 0;
var i = 0;
var j = arr.length - 1;

while (true) {
  if (leftSum >= rightSum) {
    rightSum += arr[j];
    j--;
  } else {
    leftSum += arr[i];
    i++;
  }
  if (i > j) break;
}

console.log(leftSum, rightSum);
// for (var i = 1; i < arr.length; i++) {
//   for (var j = arr.length; j >= 1; j--) {
//     leftSum += arr[i];
//     rightSum += arr[j];
//   }
// }

// if (i > j) {
//   if (leftSum == rightSum) {
//     console.log("Found");
//   } else console.log("Not Found");
// }
