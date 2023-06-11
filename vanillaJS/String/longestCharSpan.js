var str = "I am Studying Computer Science";

var arr = str.toLowerCase().split("");

var maxSpan = 0;

for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        var span = j - i;
        if (span > maxSpan) {
          maxSpan = span;
        }
      }
    }
  }

console.log(maxSpan);


// var sent = "I am Studying Computer Science";

// var prosent = sent.toLowerCase();

// for (var i = 0; i < prosent.length; i++) {
//     var span = 0;

//     var index1 = prosent.indexOf(i)    
//     var index2 = prosent.lastIndexOf(i)

//     var span = index2-index1;
// }

// console.log(span);
