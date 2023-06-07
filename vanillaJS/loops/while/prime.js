function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let count = 0;
let num = 100;

while (count < 5) {
  if (isPrime(num)) {
    document.write(num, "<br>");
    count++;
  }
  num++;
}
