// Sum of Odd Elements in Matrix
// Write a JavaScript program to calculate the sum of all odd elements in a square matrix.
// Test Data:
// ([ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]) -> 25
// ( [ [-1, -2], [-4, -5] ]) -> -6


function test(nums) {
    return nums.reduce((b,a) => [...b,...a], [])
        .reduce((b,a) => !(a%2) ? b: a+b , 0);
}

// Test cases

nums = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
       ];
console.log("Sum of all odds of the said matrix: "+test(nums));

nums = [
        [-1, -2],
        [-4, -5]
       ];
console.log("Sum of all odds of the said matrix: "+test(nums));
