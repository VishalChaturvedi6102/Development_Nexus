/*
Find Highest Insert Index (Array)

Write a JavaScript program to find the highest index at which a value should be inserted into an array to maintain its sort order.

Loosely check if the array is sorted in descending order.
Use Array.prototype.reverse() and Array.prototype.findIndex() to find the appropriate last index where the element should be inserted.

Output :
4

*/

const sortedLastIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr
    .reverse()
    .findIndex(el => (isDescending ? n <= el : n >= el));
  return index === -1 ? 0 : arr.length - index;
}; 
console.log(sortedLastIndex([10, 20, 30, 30, 40], 30));
