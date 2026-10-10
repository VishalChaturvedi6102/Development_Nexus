/*
Find Highest Insert Index

Write a JavaScript program to find the highest index at which a value should be inserted into an array to maintain its sort order. This is based on a provided iterator function

O / P :
1

*/


const sortedLastIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr
    .map(fn)
    .reverse()
    .findIndex(el => (isDescending ? val <= el : val >= el));
  return index === -1 ? 0 : arr.length - index;
};

console.log(sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x));
