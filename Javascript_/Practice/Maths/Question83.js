// Find Missing Number in Array
// Write a JavaScript program to find the missing number in a given array. There are no duplicates in the list.
// Test Data:
// ([1,2,3,5,6,7]) -> 4
// ([2,3,4,5]) -> 1

function test(nums) {
  for (let n = 1; n <= nums.length + 1; n++) {
    if (nums.indexOf(n) === -1) 
      return n;
  }
}

nums = [1, 2, 3, 5, 6, 7];
console.log("nums = " + nums);
console.log("Missing number of the said array: " + test(nums));
nums = [2, 3, 4, 5];
console.log("nums = " + nums);
console.log("Missing number of the said array: " + test(nums));
