// Express as Sum of Consecutive Integers
// Write a JavaScript program to check if a given positive integer can be expressed as the sum of two or more consecutive positive integers.
// Sample Data:
// 33 can be represented as 11 + 22
// 10 = 1+2+3+4
// but 8 cannot be represented in this way.

function test(n)
{
  return (n & (n - 1)) != 0;
}

console.log(test(33)); 
console.log(test(10)); 
console.log(test(8));  
