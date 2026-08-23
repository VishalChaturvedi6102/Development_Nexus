// Swap Variables with Bits
// Write a JavaScript program to swap two variables using bit manipulation.
// Test Data:
// (12, 15) -> (15,12)
// o/p :
// Before swap: x = 12 and y = 15
// After swap: x = 15 and y = 12

const swap = (x, y) => {
  x = x ^ y
  y = x ^ y
  x = x ^ y
  return {a:x, b:y}
} 
x = 12
y = 15
console.log("Before swap: x = " + x + " and y = " + y)
const {a,b} = swap(x, y)
console.log("After swap: x = " + a + " and y = " + b)
