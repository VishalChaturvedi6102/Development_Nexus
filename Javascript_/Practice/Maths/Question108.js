// Check Power of Four
// Write a JavaScript program to check whether a given integer is a power of four or not.
// In arithmetic and algebra, the fourth power of a number n is the result of multiplying four instances of n together. So: n4 = n × n × n × n
// Fourth powers are also formed by multiplying a number by its cube. Furthermore, they are squares of squares.
// The sequence of fourth powers of integers (also known as biquadrates or tesseractic numbers) is:
// 0, 1, 16, 81, 256, 625, 1296, 2401, 4096, 6561, 10000, 14641, 20736, 28561, 38416, 50625, 65536, 83521, 104976, 130321, 160000, 194481, 234256, 279841, 331776, 390625, 456976, 531441, 614656, 707281, 810000, ...
// Test Data:
// (16) -> true
// (4096) -> true
// (36) -> false


function test(n) {
 
  if (n < 1) {
    return false;
  }
  while (n % 4 === 0) {
    n = n / 4;
  }
  return n === 1;
}

// Test cases
n = 16;
console.log("Number n = " + n);
console.log("Check if the said number is a power of four: " + test(n));
n = 4096;
console.log("Number n = " + n);
console.log("Check if the said number is a power of four: " + test(n));
n = 36;
console.log("Number n = " + n);
console.log("Check if the said number is a power of four: " + test(n));
