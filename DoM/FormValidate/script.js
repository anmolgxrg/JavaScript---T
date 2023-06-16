function validateForm() {
  var email = document.forms["myform"]["email"].value;
  var password = document.forms["myform"]["password"].value;
  var pin = document.forms["myform"]["pin"].value;

  if (email == "") {
    alert("Please enter your email.");
    return ;
  }

  if (password == "") {
    alert("Please enter your password.");
    return false;
  }

  if (pin == "") {
    alert("Please enter your PIN.");
    return false;
  }

  if (isNaN(pin)) {
    alert("Your PIN must be a number.");
    return false;
  }
}
