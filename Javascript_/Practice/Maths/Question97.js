// Excel Column Title from Number
// Write a JavaScript program to retrieve the Excel column title associated with a given column number (integer value). 

// For example:
// 1 -> A
// 2 -> B
// 3 -> C
// ...
// 26 -> Z
// 27 -> AA
// 28 -> AB
// ...

// Test Data:
// (3) -> C
// (27) -> AA
// ( 151) -> EU

function test(n) {
  s = 1; 
  e = 26; 
  result = ""; 
  while ((n -= s) >= 0) { 
        result = String.fromCharCode(parseInt((n % e) / s) + 65) + result; 
        s = e; 
        e *= 26; 
    }
  return result; 
}

// Test cases
let n = 4;
console.log("n = " + n);
console.log("Excel column title related with the said column number: " + test(n));

n = 27;
console.log("n = " + n);
console.log("Excel column title related with the said column number: " + test(n));

n = 151;
console.log("n = " + n);
console.log("Excel column title related with the said column number: " + test(n)); 
