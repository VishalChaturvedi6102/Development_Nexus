// Non-Repeated Element
// In an array every element appears twice except for one. Write a JavaScript program to find the non-repeated element in an array using bit manipulation.

// Test Data:
// ([1]) -> 1
// ([1, 2, 3]) -> 0 [All elements are non- repeated]
// [1, 2, 8, 3, 1, 2, 3, 8, 6, 6, 7] -> 7 
 
 
 const non_repeated_num = (nums) => {
   r = 0
   for(let i = 0; i <= nums.length; i++)
     {
       r = r ^ nums[i]
     }
   return r
 }
nums = [1, 2, 8, 3, 1, 2, 3, 8, 6, 6, 7]
console.log(non_repeated_num(nums))
