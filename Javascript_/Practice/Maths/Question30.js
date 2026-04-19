// Define a function named sqrt_to_int that calculates the square root of a number and returns the integer part of the result.
// Cast Square Root to Integer
// Write a JavaScript function to cast the square root of a number to an integer.
// Test Data:
// console.log(sqrt_to_int(17));
// 4



function sqrt_to_int(num)
{
    return parseInt(Math.sqrt(num)+"");
}

console.log(sqrt_to_int(17));
