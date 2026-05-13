// Check Power of 10

// Write a JavaScript program to check if a given number is a power of 10.
// Math.log10() and the modulo operator (%) determines if num is a power of 10.

// Define an arrow function named is_Power_Of_Ten that checks if a number is a power of ten.
const is_Power_Of_Ten = num => Math.log10(num) % 1 === 0;

console.log(is_Power_Of_Ten(1));
console.log(is_Power_Of_Ten(10));
console.log(is_Power_Of_Ten(30));
console.log(is_Power_Of_Ten(100));
console.log(is_Power_Of_Ten(90));
console.log(is_Power_Of_Ten(1000));
