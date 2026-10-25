/* Selection Sort

Write a JavaScript program to sort a list of elements using the Selection sort algorithm.
The selection sort improves on the bubble sort by making only one exchange for every pass through the list.

O/P :
[-1,0,1,2,3,4,5]
[5,4,3,2,1,0,-1]

*/

function Selection_Sort(arr, compare_Function) {

  function compare(a, b) {
   return a - b;
   } 
  var min = 0;
  var index = 0;
  var temp = 0;

  compare_Function = compare_Function || compare;

  for (var i = 0; i < arr.length; i += 1) {
    index = i;
    min = arr[i];

    for (var j = i + 1; j < arr.length; j += 1) {
      if (compare_Function(min, arr[j]) > 0) {
        min = arr[j];
        index = j;
      }
    }

    temp = arr[i];
    arr[i] = min;
    arr[index] = temp;
  }
  return arr;
}

console.log(Selection_Sort([3, 0, 2, 5, -1, 4, 1], function(a, b) { return a - b; })); 
console.log(Selection_Sort([3, 0, 2, 5, -1, 4, 1], function(a, b) { return b - a; }));
