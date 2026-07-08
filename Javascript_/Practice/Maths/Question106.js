// Fewest Perfect Squares Sum
// Write a JavaScript program that accepts an integer (n) as input and calculates the lowest number of exact square numbers that sum to n.
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 9 is a square number, since it equals 32 and can be written as 3 × 3.
// Example:
// Input: 12
// Output: 3
// Explanation: 12 = 32 + 12 + 12
// Input: 63
// Output: 4
// Explanation: 63 = 72 + 32 + 22 + 12.
// Test Data:
// (12) -> 3
// (13) -> 2
// (63) -> 4


function test(n) {
    var maps = [];
    maps[0] = 0;
    maps[1] = 1;
    maps[2] = 2;
    maps[3] = 3;
    
    for (var i = 3; i <= n; i++) {
        maps[i] = maps[i-1] + 1;
        for (var j = 1; j*j <= i; j++) {
            maps[i] = Math.min(maps[i], maps[i-j*j] + 1);
        }
    }
    
    return maps[n];
}

// Test cases
n = 12;
console.log("Number n = " + n);
console.log("Least number of perfect squares that sum up to n: " + test(n));
n = 13;
console.log("Number n = " + n);
console.log("Least number of perfect squares that sum up to n: " + test(n));
n = 63;
console.log("Number n = " + n);
console.log("Least number of perfect squares that sum up to n: " + test(n));
