var arr = [
  [1, 2],
  [3, 4],
];
// document.write(a.flat())
var b = [];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    b.push(arr[i][j]);
  }
}
document.write(b);

//a[0][0],a[0][1],a[1][0],a[1][1]
