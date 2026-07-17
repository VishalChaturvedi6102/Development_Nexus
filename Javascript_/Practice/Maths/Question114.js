// Check Self-Dividing Number
// Write a JavaScript program that checks if a given number is self-dividing.
// In mathematics, a self-dividing number is one that can be divided by every digit (except digit zero) within it.
// Test Data:
// (48) -> true
// (22) -> true
// (63) -> false


function test(n) {
    i = n; 
    num = i; 
    flag = true; 
    while (num > 0) { 
        mod = num % 10; 
        if (i % mod !== 0) { 
            flag = false; 
        }
        num = Math.floor(num / 10); 
    }
    return flag; 
}

// Test cases
n = 48;
console.log("n = " + n);
console.log("Check the said number is self-dividing or not: " + test(n));
n = 22;
console.log("n = " + n);
console.log("Check the said number is self-dividing or not: " + test(n));
n = 63;
console.log("n = " + n);
console.log("Check the said number is self-dividing or not: " + test(n));
