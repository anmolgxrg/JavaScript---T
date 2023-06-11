var string = "12akanshal11";
var sum = 0;
var temp = " ";

for (var i = 0; i < string.length; i++) {
  var char = string.charAt(i);
  if (!isNaN(char)) {
    temp += char;
  } else {
    if (temp != " ") {
      sum += parseInt(temp);
      temp = " ";
    }
  }
}
if (temp != " ") {
  sum += parseInt(temp);
}
console.log(sum);
