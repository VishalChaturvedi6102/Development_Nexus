

// Define a function named is_Numeric that checks if a value is numeric.
// Check If Value is Numeric
// Write a JavaScript function to check whether a variable is numerical or not.Mathematics

// Test Data:
// console.log(is_Numeric(12));
// console.log(is_Numeric('abcd'));
// console.log(is_Numeric('12'));
// console.log(is_Numeric(' '));
// console.log(is_Numeric(1.20));
// console.log(is_Numeric(-200));
// Output:
// true
// false
// true
// false
// true
// true

function is_Numeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}


console.log(is_Numeric(12));

console.log(is_Numeric('abcd'));

console.log(is_Numeric('12'));

console.log(is_Numeric(' '));
console.log(is_Numeric(1.20));

console.log(is_Numeric(-200));
