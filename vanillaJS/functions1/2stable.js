var i = 1;
var t = -1;
function printNextRow() {
  console.log(`2 x ${i} = ${2 * i}`);
  i++;
  if (i > 10) clearInterval(t);
}
t = setInterval(printNextRow, 2000);
