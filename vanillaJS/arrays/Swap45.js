var arr = [5, 4, 2, 3, 8, 5, 9, 4, 1];

// itterate through the array for 4 and get the index

for (var i = 0; i < arr.length; i++) {
  if (arr[i] == 4) {
    var index4 = i;
  }
}

// itterate through the array for 5 and get the index

for (var j = 0; j < arr.length; j++) {
  if (arr[j] == 5) {
    var index5 = j;
  }
}
// swap index of 5 and next index of 4

var temp = arr[index5];
arr[index5] = arr[index4 + 1];
arr[index4 + 1] = temp;


// Iterate through the array to find the index of 4
var index4 = -1;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        index4 = i;
        break;
    }
}

// Iterate through the array to find the index of 5
var index5 = -1;
for (var j = 0; j < arr.length; j++) {
    if (arr[j] === 5) {
        index5 = j;
        break;
    }
}

// Swap the values
if (index4 !== -1 && index5 !== -1) {
    var temp = arr[index4 + 1];
    arr[index4 + 1] = arr[index5];
    arr[index5] = temp;
}

console.log(arr);


