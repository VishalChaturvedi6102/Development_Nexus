// Define a constant named power_of_2 using arrow function syntax that checks if a number is a power of 2.

// Check Power of 2
// Write a JavaScript function to test if a number is a power of 2.

// Test Data:
// console.log(power_of_2(16));
// console.log(power_of_2(18));
// console.log(power_of_2(256));
// Output:
// true
// false
// true


const power_of_2 = n => !!n && (n & (n - 1)) == 0;

console.log(power_of_2(16));
console.log(power_of_2(18));
console.log(power_of_2(256));
