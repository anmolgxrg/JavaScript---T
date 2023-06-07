var arr = [1, 11.1, { name: "Anmol", college: "PennState" }];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    sum += arr[i];
  }
}
document.write(sum);

//arr[3]();

// document.write([1, 11.1, {name:"Anmol", college:"PennState"}, function name(){document.write("Akanshal")}]+1)

// document.write([1,11]+1)
