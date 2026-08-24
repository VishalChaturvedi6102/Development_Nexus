// Count Zero Bits
// Write a JavaScript program to count 0 bits in the binary representation of a given integer.

// Test Data:
// (45) -> 2
// (17) -> 3
// (15) -> "Parameter value is not an Integer!"


function Binary_Count_SetBits(a) 
{
 
  if (!Number.isInteger(a))
    {
      return('Parameter value is not an Integer!')
    }
    return a.toString(2).split('0').length - 1
}
console.log(Binary_Count_SetBits(45))
console.log(Binary_Count_SetBits(17))
console.log(Binary_Count_SetBits("15"))
