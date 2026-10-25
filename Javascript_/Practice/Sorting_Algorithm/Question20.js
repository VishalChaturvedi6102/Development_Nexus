/*
Find Lowest Insert Index

Write a JavaScript program to find the lowest index at which a value should be inserted into an array to maintain its sorting order. This is based on the provided iterator function.

Loosely check if the array is sorted in descending order.
Use Array.prototype.findIndex() to find the appropriate index where the element should be inserted, based on the iterator function fn.

Output :
0
*/


const sortedIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr.findIndex(el =>
    isDescending ? val >= fn(el) : val <= fn(el)
  );
  return index === -1 ? arr.length : index;
};

console.log(sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x));
