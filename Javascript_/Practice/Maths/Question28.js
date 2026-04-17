// Define a function named int_round5 that rounds a number up to the nearest multiple of 5.
// Round Integer to Next Multiple of 5
// Write a JavaScript function to round up an integer value to the next multiple of 5.
// Test Data:
// console.log(int_round5(32));
// 35
// console.log(int_round5(137));
// 140

function int_round5(num)
{
    return Math.ceil(num/5)*5;
}

console.log(int_round5(32));
console.log(int_round5(137));
console.log(int_round5(142));
