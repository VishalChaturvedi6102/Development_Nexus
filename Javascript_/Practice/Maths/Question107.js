// Check Power of Three
// Write a JavaScript program to check whether a given integer is a power of three or not.
// In mathematics, a power of three is a number of the form 3n where n is an integer – that is, the result of exponentiation with number three as the base and integer n as the exponent.
// Test Data:
// (27) -> true
// (9) -> true
// (36) -> false


function test(n) {
    return (Math.log10(n) / Math.log10(3)) % 1 == 0;
}

// Test cases
n = 27;
console.log("Number n = " + n);
console.log("Check if the said number is a power of three: " + test(n));
n = 9;
console.log("Number n = " + n);
console.log("Check if the said number is a power of three: " + test(n));
n = 36;
console.log("Number n = " + n);
console.log("Check if the said number is a power of three: " + test(n));
