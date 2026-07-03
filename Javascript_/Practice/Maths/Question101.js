// Find nth Ugly Number
// Write a JavaScript program to find the nth ugly number.
// Ugly numbers are positive numbers whose only prime factors are 2, 3 or 5. The first 10 ugly numbers are:
// 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, ...
// Note: 1 is typically treated as an ugly number.
// Test Data:
// (4) -> 4
// (10) -> 12

function test(num) {
    result = [1]; 
    x2 = x3 = x5 = 0; 
    while (result.length < num) { 
        m2 = result[x2] * 2; 
        m3 = result[x3] * 3; 
        m5 = result[x5] * 5; 
        temp = Math.min(m2, m3, m5); 
        if (temp === m2) { 
            x2++;
        }
        if (temp === m3) { 
            x3++;
        }
        if (temp === m5) { 
            x5++;
        }
        result.push(temp);
    }
    return result[num - 1]; 
};  

// Test cases
n = 4;
console.log("n = " + n);
console.log("nth Ugly number is " + test(n));

n = 10;
console.log("n = " + n);
console.log("nth Ugly number is " + test(n));
