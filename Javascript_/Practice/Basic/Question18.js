/*
Check if Number or Sum is 50

Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50. Learn Math

This JavaScript program checks a pair of numbers and returns true if one of the numbers is 50 or if their sum equals 50. It utilizes logical operators and conditional statements to evaluate the given conditions and return the appropriate result.
*/
const test50 = (x, y) => ((x === 50 || y === 50) || (x + y === 50));

console.log(test50(50, 50));

console.log(test50(20, 50));

console.log(test50(20, 20));

console.log(test50(20, 30));
