/*
Sum Two Integers (Triple if Equal)

Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

This JavaScript program calculates the sum of two given integers. If the two integers are the same, it returns triple their sum. It demonstrates conditional statements to determine whether the integers are equal and to perform the appropriate computation accordingly.
*/

const sumTriple = (x, y) => {

    if (x == y) {
    return 3 * (x + y);
  } else {
    return (x + y);
  }
};

console.log(sumTriple(10, 20));
console.log(sumTriple(10, 10));
