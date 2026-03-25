// Define a function named max that takes an input array.

// Write a JavaScript function to find the highest value in an array.

// Test Data :
// console.log(max([12,34,56,1]));
// console.log(max([-12,-34,0,-56,-1]));
// 56
// 0

function max(input) {
    if (toString.call(input) !== "[object Array]")
        return false;
    return Math.max.apply(null, input);
}

console.log(max([12, 34, 56, 1]));
console.log(max([-12, -34, 0, -56, -1]));
