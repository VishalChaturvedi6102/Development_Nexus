/*
Check if Number is Multiple of 3 or 7

Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

This JavaScript program checks if a given positive number is a multiple of either 3 or 7. It uses the modulo operator (%) to determine if the number is divisible by 3 or 7 without any remainder. If the result is 0 for either operation, it means the number is a multiple of 3 or 7, respectively.
*/

function test37(x) {
  if (x % 3 == 0 || x % 7 == 0) {
    return true;
  } 
  
  else {
    return false;
  }
}

console.log(test37(12));
console.log(test37(14));
console.log(test37(10));
console.log(test37(11)); 
