// Define a function named pos_to_neg that converts a positive number to its negative equivalent.
// Convert Positive Number to Negative
// Write a JavaScript function to convert a positive number to a negative number.
// Test Data :
// console.log(pos_to_neg(15));
// -15

function pos_to_neg(num)
{
    return -Math.abs(num);
}

console.log(pos_to_neg(15));
