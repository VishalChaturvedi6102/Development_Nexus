/*
Check Array Sorted

Write a JavaScript program to check if a numeric array is sorted or not.

Loosely check if the array is sorted in descending order.
Use Array.prototype.reverse() and Array.prototype.findIndex() to find the appropriate last index where the element should be inserted.

Output :
1
-1
0
0

*/

const isSorted = arr => {
  if (arr.length <= 1) return 0;
  const direction = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if ((arr[i] - arr[i - 1]) * direction < 0) return 0;
  }
  return Math.sign(direction);
};
console.log(isSorted([0, 1, 2, 2]));
console.log(isSorted([4, 3, 2]));
console.log(isSorted([4, 3, 5]));
console.log(isSorted([4]));
