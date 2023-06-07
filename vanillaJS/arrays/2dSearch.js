var arr = [
    [1, 2],
    [3, 4],
  ];
  
  var flag = false;
  var element = 32;
  
  loop1: for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == element) {
        document.write("Element found, element searched was: ", element);
        flag = true;
        break loop1;
      }
    }
  }
  
  if (!flag) {
    document.write("Element not found");
  }
  