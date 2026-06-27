// Factorial Trailing Zeroes
// Write a JavaScript program that calculates the factorial of a number and returns the number of trailing zeroes.
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. The factorial of n also equals the product of n with the next smaller factorial:
// n! = n x (n-1) x (n-2) x (n-3)x.....x 3 x 2 x 1
// = n x (n-1)!
// For example 4! = 4 x 3! = 4 x 3 x 2 x 1 =24
// The value of 0! is 1, according to the convention for an empty product.
// Test Data:
// (4) -> 0
// (9) -> 1
// (10) -> 2
// (23) -> 4
// (35) -> 8


function test(n) {
    ctr = 0;
    i = 5; 
    while (n / i >= 1) {
        ctr += Math.floor(n / i); 
        i *= 5; 
    }
    return ctr; 
}
// Test cases
let n = 4;
console.log("n = " + n);
console.log("Number of trailing zeroes in the factorial: " + test(n));

n = 9;
console.log("n = " + n);
console.log("Number of trailing zeroes in the factorial: " + test(n));

n = 10;
console.log("n = " + n);
console.log("Number of trailing zeroes in the factorial: " + test(n));

n = 23;
console.log("n = " + n);
console.log("Number of trailing zeroes in the factorial: " + test(n));

n = 35;
console.log("n = " + n);
console.log("Number of trailing zeroes in the factorial: " + test(n));
