var sent = "This is Java and is tough";

var arr = sent.split(" ");

for (var i = 0; i < arr.length; i++) {
  var index1 = arr.indexOf("is");

  if (index1 !== -1) {
    arr[index1] = "was";

    var newString = arr.join(" ");
  }
}
console.log(newString);
