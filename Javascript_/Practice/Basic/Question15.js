/*
Difference Between Number and 13

Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

This JavaScript program calculates the difference between a given number and 13. If the number is less than or equal to 13, it returns the absolute difference. However, if the number is greater than 13, it returns double the absolute difference. It demonstrates conditional statements to determine the appropriate action based on the value of the given number.
*/

const difference = (n) => {
  return n <= 13 ? 13 - n : (n - 13) * 2;
};

console.log(difference(32));
console.log(difference(11));
