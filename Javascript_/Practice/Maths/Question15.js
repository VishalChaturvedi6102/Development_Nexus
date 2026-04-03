// Define a function named is_Int that checks if a number is an integer.
// Check If Value is Integer

// Write a JavaScript function to check whether a value is an integer or not.

// Test Data:
// console.log(is_Int(23));
// console.log(is_Int(4e2));
// console.log(is_Int(NaN));
// console.log(is_Int(23.75));
// console.log(is_Int(-23));
// Output :
// true
// true
// false
// false
// true

function is_Int(num) {
    if (typeof num !== 'number')
        return false; 
    return !isNaN(num) && 
           parseInt(Number(num)) == num && 
           !isNaN(parseInt(num, 10));
}

console.log(is_Int(23));
console.log(is_Int(4e2));
console.log(is_Int(NaN));
console.log(is_Int(23.75));
console.log(is_Int(-23));
