var arr = [1, 105, 15, 125, 1005, 150, 514];

function containsFive(item, index, array) {
  return item % 10 === 5; //only ones place search
  return String(item).includes("5"); //search all digits
}

var res = arr.filter(containsFive);

console.log(res);
