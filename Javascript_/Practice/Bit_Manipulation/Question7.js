// Swap Bits
// Write a JavaScript program to swap two bits (from the right side, the rightmost position is 0) in the binary representation of an integer at the given position.

// Test Data:
// (245) -> 249
// Explanation:
// 245 -> 11110101
// Swap the 1st and 4th bits from the side of the said binary number.
// 11100111 -> 231
// (137) -> 73
// Explanation:
// 137 -> 10001001
// Swap the 6th and 7th bits from the side of the said binary number.
// 01001001 -> 73


// Define a function to swap bits at given positions in a number
const swap_bits = (n, pos1, pos2) => {
   if (typeof n!= "number") {
          return 'It must be number!' 
      }
   if ((((n & (1 << pos1)) >> pos1) ^ ((n & (1 << pos2)) >> pos2)) == 1)
        {
            n ^= (1 << pos1); 
            n ^= (1 << pos2); 
        }
   return n; 
}
console.log(swap_bits(245,1,4)) 
console.log(swap_bits(137,6,7)) 
console.log(swap_bits("16")) 
