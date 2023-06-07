//check a[i]+1 and a[i+1], a[i]+2 and a[i+1]+1 (consec)

var arr = [1, 2, 3, 5, 8, 15];

var totalsequences = 0;
var SeqLength = 1;
var LongestSequence = [];
var startIndex = 0;

for (var i = 0; i < arr.length - 1; i++) {
  if (arr[i] + 1 === arr[i + 1]) {
    SeqLength++;
  } else {
    SeqLength = 1;
    startIndex = i + 1;
  }
  // if (SeqLength > LongestSequence.length) {
  //   LongestSequence = arr.slice(i - SeqLength + 2, i + 2);
  // }
  if (SeqLength > LongestSequence.length) {
    LongestSequence = []; //???
    for (var j = startIndex; j <= i + 1; j++) {
      LongestSequence.push(arr[j]);
    }
  }
}
// if (SeqLength > LongestSequence.length) {

// if (arr[i] + 1 === arr[i + 1] && arr[i + 2] === arr[i + 1] + 1) {
//   totalsequences++;
// }
var a = LongestSequence.length;
document.write(a);

// document.write(totalsequences);
