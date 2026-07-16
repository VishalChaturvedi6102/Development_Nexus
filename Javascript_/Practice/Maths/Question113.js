// Smallest Number from Digit Product
// Write a JavaScript program to calculate the smallest number whose digits multiply into a given number.
// Example:
// let n =100
// Test Data:
// (100) -> 455
// (120) -> 358
// (16) -> 28
// (129) -> 0


function test(n) {
    if (n < 10) return n; 
    data = []; 
    for (i = 9; i > 1; i--) {
        while (n % i === 0) {
            n = n / i;
            data.push(i);
        }
    }

    if (n != 1) return 0; 
    result = 0; 
    for (i = data.length - 1; i >= 0; i--) {
        result = result * 10 + data[i];
        if (result > Number.MAX_VALUE) return 0;
    }
    return result;
}

// Test cases
n = 100;
console.log("n = " + n);
console.log("Smallest number whose digits multiply to the said number: " + test(n));
n = 120;
console.log("n = " + n);
console.log("Smallest number whose digits multiply to the said number: " + test(n));
n = 16;
console.log("n = " + n);
console.log("Smallest number whose digits multiply to the said number: " + test(n));
n = 129;
console.log("n = " + n);
console.log("Smallest number whose digits multiply to the said number: " + test(n));
