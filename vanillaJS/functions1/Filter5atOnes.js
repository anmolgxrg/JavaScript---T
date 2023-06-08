var arr = [1, 105, 15, 125, 1005, 150, 514];

function containsFive(item, index, array) {
  return String(item).includes('5');
}

var res = arr.filter(containsFive);

console.log(res);
