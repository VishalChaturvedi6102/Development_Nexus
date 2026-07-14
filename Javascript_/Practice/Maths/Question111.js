// Kth Smallest in Multiplication Table

// Write a JavaScript program that creates a multiplication table of size m x n using integers where 1 <= k <= m * n. Return the kth smallest element in the said multiplication table.

// In mathematics, a multiplication table is a mathematical table used to define a multiplication operation for an algebraic system.
// The decimal multiplication table was traditionally taught as an essential part of elementary arithmetic around the world, as it lays the foundation for arithmetic operations with base-ten numbers. Many educators believe it is necessary to memorize the table up to 9 x 9.
// The illustration below shows a table up to 12 x 12, which is a size commonly used nowadays in English-world schools.
// Test Data:
// (3,3,8) -> 6
// (2,3,4) -> 3


function test(m, n, k) {
    if (k < 1 || k > m * n) return false;
    var s = 1, p = n * m;
  
    while (s <= p) {
        var mid = s + Math.floor((p - s) / 2);
        var t = 0;
      
        for (i = 1; i <= m; i++) {
            t += Math.min(Math.floor(mid / i), n);
        }
        if (t >= k) {
            p = mid - 1;
        } else {
            s = mid + 1;
        }
    }
    return s;
}

// Test cases
m = 3;
n = 3;
k = 8;
console.log("m = " + m + " : n = " + n + ", k = " + k);
console.log("kth smallest element in m x n multiplication table: " + test(m, n, k));
m = 2;
n = 3;
k = 4;
console.log("m = " + m + " : n = " + n + ", k = " + k);
console.log("kth smallest element in m x n multiplication table: " + test(m, n, k));
