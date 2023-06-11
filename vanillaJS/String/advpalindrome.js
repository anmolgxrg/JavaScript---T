// program to check if the string is palindrome or not

function checkPalindrome(string) {
  var n = string.length;

  var len = 0;
  var i = (n + 1) / 2;

  // loop through half of the string
  while (i < n) {
    if (string[i] == string[len]) {
      console.log(string[i], string[len]);
      ++len;
      ++i;
      console.log("Max length matched till now",len);
    } else {
      len = 0;
      i = i - len + 1;
    }
  }
}

const string = "madma";

// call the function
const value = checkPalindrome(string);

console.log(value);
