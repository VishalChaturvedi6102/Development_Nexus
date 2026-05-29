// Sum of Digits
// Write a JavaScript program to calculate the sum of a given number's digits. Mathematics
// In mathematics, the digit sum of a natural number in a given number base is the sum of all its digits. For example, the digit sum of the decimal number 6098 would be 6+0+9+8=23.
// Sample Data:
// 6098 -> 23
// -501 -> 6
// 2546 -> 17
function sum_Of_Digits(n) {
  if (n < 0) n = -n;
  let result = 0;

  while (n > 0) {
    result += n % 10; 
    n = Math.floor(n / 10); 
  }
  return result;
}
console.log(sum_Of_Digits(6098)); 
console.log(sum_Of_Digits(-501)); 
console.log(sum_Of_Digits(2546));
