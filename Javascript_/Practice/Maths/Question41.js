// Define a function named digits_count that counts the number of digits in a given number.
function digits_count(n) {
  var count = 0;
  if (n >= 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }
  return count;
}
console.log(digits_count(12112));
console.log(digits_count(457));
