// Count Digit 1 in Range
// Write a JavaScript program to count the number of times the digit 1 appears in 1 to a given number.
// Example : 11, 1 appears 4 time between 1 to 11 [1->1, 10->1 ,11-.2]
// Test Data:
// (11) -> 4
// (305) -> 161
// (0) -> false

function test(num) {
    if (num < 1) 
        return false;
    var ctr = 0; 
    for (var i = 1; i <= num; i *= 10) { 
        var d = i * 10; 
        ctr += parseInt(num / d) * i + Math.min(Math.max(num % d - i + 1, 0), i);
    }
    return ctr; 
}
n = 11;
console.log("n = " + n);
console.log("Total number of 1s from 1 to n: " + test(n));

n = 305;
console.log("n = " + n);
console.log("Total number of 1s from 1 to n: " + test(n));

n = 0;
console.log("n = " + n);
console.log("Total number of 1s from 1 to n: " + test(n));
