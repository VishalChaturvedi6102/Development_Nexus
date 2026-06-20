// Oddly Divisible Sum in Range
// Write a JavaScript program that takes three arguments x, y, n and calculates the sum of the numbers oddly divided by n from the range x, y inclusive. 
// Test Data:
// (1,5,3) -> 3
// (100, 1000, 5) -> 99550
function test(x, y, n) {
    let num_sum = 0;
    for (let i = x; i <= y; i++) {
     
        num_sum += i % n === 0 ? i : 0;
    }
    return num_sum;
}

x = 1;
y = 5;
n = 3;



console.log("Range: " + x + "-" + y);
console.log("Divisible number: " + n);

console.log("Sum of oddly divisible numbers from the said range: " + test(x, y, n));

x = 100;
y = 1000;
n = 5;
console.log("Range: " + x + "-" + y);
console.log("Divisible number: " + n);
console.log("Sum of oddly divisible numbers from the said range: " + test(x, y, n));
