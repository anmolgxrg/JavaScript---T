var arr = [1, 2, 3, 4, 2, 5, 4];
var duplicates = [];

for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
  }
}

if (duplicates.length > 0) {
  document.write("Duplicates found: " + duplicates.join(", "));
} else {
  document.write("No duplicates found");
}
