/*
Find Lowest Insert Index (Array)

Write a JavaScript program to find the lowest index at which a value should be inserted into an array to maintain its sorting order.

Loosely check if the array is sorted in descending order.
Use Array.prototype.findIndex() to find the appropriate index where the element should be inserted.

Output:
1
1
*/

const sortedIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));
  return index === -1 ? arr.length : index;
};
console.log(sortedIndex([5, 3, 2, 1], 4));
console.log(sortedIndex([30, 50], 40));
