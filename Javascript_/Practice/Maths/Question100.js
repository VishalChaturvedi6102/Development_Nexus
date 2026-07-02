// Check Ugly Number
// Write a JavaScript program to check if a given number is ugly. 
// Ugly numbers are positive numbers whose only prime factors are 2, 3 or 5. The first 10 ugly numbers are:
// 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, ...
// Note: 1 is typically treated as an ugly number.
// Test Data:
// (12) -> true
// (18) -> true
// (19) -> false

function test(n) {
  map = [5, 3, 2]; 
  for (let i = 0; i < map.length && n > 1; i++) { 
    while (n % map[i] === 0) n /= map[i]; 
  }
  return n === 1; 
};  

// Test cases
n = 12;
console.log("n = " +n);
console.log("Check the said number is an ugly number? "+test(n));

n = 18;
console.log("Original text: " +n);
console.log("Check the said number is an ugly number? "+test(n));

n = 19;
console.log("Original text: " +n);
console.log("Check the said number is an ugly number? "+test(n));
