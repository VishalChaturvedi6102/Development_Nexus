/*
Ternary Search Index

Write a JavaScript program to find the first index of a given element in an array using the ternary search algorithm.

A ternary search algorithm is a technique in computer science for finding the minimum or maximum of a unimodal function. A ternary search determines either that the minimum or maximum cannot be in the first third of the domain or that it cannot be in the last third of the domain, then repeats on the remaining two thirds. A ternary search is an example of a divide and conquer algorithm.

Test  Data:
([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 0, 5)) -> 2
([1, 2, 3, 4, 5, 6, 7, 8, 9], 9, 0, 8)) -> 8
([1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 0, 8)) -> -1
([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, 6, 8)) -> -1

Output :
2
8
-1
-1

*/



const ternary_Search = (arr, target, left, right) => {
	if (right >= left) {
		let mid1 = Math.floor(left + (right - left) /3);
		let mid2 = Math.floor(right - (right - left) /3);

		if (arr[mid1] == target) {
			return mid1;
		}
		else if (arr[mid2] == target) {
			return mid2;
		}

		if (target < arr[mid1]) {
			return ternary_Search(arr, target, left, mid1 - 1);
		}
		else if (target > arr[mid2]) {
			return ternary_Search(arr, target, mid2 + 1, right);
		}
		else {
			return ternary_Search(arr, target, mid1 + 1, mid2 - 1);
		}
	}
	return -1;
}

console.log(ternary_Search([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 0, 5))
console.log(ternary_Search([1, 2, 3, 4, 5, 6, 7, 8, 9], 9, 0, 8))
console.log(ternary_Search([1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 0, 8))
console.log(ternary_Search([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, 6, 8))

