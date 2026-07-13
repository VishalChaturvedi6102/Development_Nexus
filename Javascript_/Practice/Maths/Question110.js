// Sum of Two Squares Equals Integer
// Write a JavaScript program to check whether the sum of two square integers is equal to another given integer.
// For example a2 + b2 = c where c is the given integer.
// Example: 13 = 22 + 32
// Test Data:
// (2) -> true
// (5) -> true
// (13) -> true
// (15) -> false


function test(n) {

   if (n <= 1) return false;
    max_val = Math.floor(Math.sqrt(n - 1));
    while (max_val >= 0) {
       temp = Math.sqrt(n - max_val * max_val);
        if (!(temp % 1)) {
            return true;
        };
        max_val -= 1;
    };

    return false;
}

// Test cases
n = 2;
console.log("n = " + n);
console.log("Check if the sum of two square integers is equal to the said integer: " + test(n));
n = 5;
console.log("n = " + n);
console.log("Check if the sum of two square integers is equal to the said integer: " + test(n));
n = 13;
console.log("n = " + n);
console.log("Check if the sum of two square integers is equal to the said integer: " + test(n));
n = 15;
console.log("n = " + n);
console.log("Check if the sum of two square integers is equal to the said integer: " + test(n));
