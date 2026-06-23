// Cube Root Reduction Steps
// Write a Python program that takes a positive integer and calculates the cube root of the number until it is less than three. Return the number of steps to complete this process.
// Test Data:
// (27) -> 2
// (10000) -> 2
// (-100) -> "Not a positive number!"


function test(n) {
    let ctr = 0;
    while (n >= 3) {
        n =  n ** (1./3.);
        ctr = ctr + 1;
    }
    if (n < 0)
        return 'Not a positive number!';
    else 
        return ctr;
} 

// Test cases
console.log("Iterated Cube Root:");
let n = 27;
console.log("n = "+n);
console.log("Number of steps to complete the said process: "+test(n));
n = 10000;
console.log("n = "+n);
console.log("Number of steps to complete the said process: "+test(n));
n = -100;
console.log("n = "+n);
console.log("Number of steps to complete the said process: "+test(n));
