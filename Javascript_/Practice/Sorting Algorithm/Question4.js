// Insertion Sort

// Write a JavaScript program to sort a list of elements using Insertion sort.

// Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

// O/P :
// [-1,0,1,2,3,4,5]
// [-92,-55,-43,-23,-4,-3,-2,-1,0,1,1,2,3,5,6,7,7,8,12,18,20,21,23,29,37,54,54,81,90,93,93,210,483,7372,9339]

const insertion_Sort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1
    let temp = nums[i]
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j]
      j--
    }
    nums[j+1] = temp
  }
  return nums
}
console.log(insertion_Sort([3, 0, 2, 5, -1, 4, 1]));
console.log(insertion_Sort([2,6,5,12,-1,3,8,7,1,-4,0,23,1,-55,20,37,54,210,-23,7,483,9339,29,-3,90,-2,81,54,7372,-92,93,93,18,-43,21]));
