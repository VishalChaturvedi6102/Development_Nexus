/*Check if Integer is Within 20 of 100 or 400

Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

This JavaScript program checks whether a given integer is within 20 units of either 100 or 400. It utilizes conditional statements and the absolute value function to calculate the difference between the given integer and 100 or 400, determining if the difference is less than or equal to 20, returning true if either condition is met and false otherwise.*/

const testhundred = (x) => ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20));

console.log(testhundred(10));

console.log(testhundred(90));

console.log(testhundred(99));

console.log(testhundred(199));

console.log(testhundred(200));
