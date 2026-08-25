// Next Power of Two
// Write a JavaScript program to find the next power of two of a given number.
// A power of two is a number of the form 2n where n is an integer, that is, the result of exponentiation with number two as the base and integer n as the exponent.
// The first ten powers of 2 for non-negative values of n are: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, ...

// Test Data:
// (1) -> 1
// (4) -> 4
// (9) -> 16
// ("15") -> "It must be number!"

const next_Power_Of_Two = (num) => {
      if (typeof num != "number") {
          return 'It must be number!'
      }

  if (num > 0 && (num & (num - 1)) === 0) 
    return num
  let result = 1

  while (num > 0) 
  {
    result = result << 1
    num = num >> 1
  }
  return result
}
console.log(next_Power_Of_Two(1))
console.log(next_Power_Of_Two(4))
console.log(next_Power_Of_Two(9))
console.log(next_Power_Of_Two("15"))
