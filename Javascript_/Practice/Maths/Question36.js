// Define a function named isPower_of_two that checks if a given number is a power of two.
// Check If Number Is Power of Two
// Write a JavaScript function to return powers of two values.
// Test Data :
// console.log(isPower_of_two(64));
// true
// console.log(isPower_of_two(94));
// false



function isPower_of_two(num)
{
    return num && (num & (num - 1)) === 0;
}
console.log(isPower_of_two(64));  
console.log(isPower_of_two(94));
