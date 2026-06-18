// Check Sastry Number
// Write a JavaScript program that checks whether a number (positive integer) is a Sastry number or not. 
// The number N is a Sastry number when it is concatenated with N+1 and gives a perfect squares. Some Sastry numbers are 183, 328, 528, 715, 6099, 13224, 40495, 106755, 453288, 2066115, 2975208, 22145328, 28027683, 110213248...
// Test Data:
// (27) -> false
// (328) -> true
// (28027683) -> true



function test(n){
    
	return Number.isInteger(Math.sqrt(`${n}${n + 1}`));
}

n = 27;
console.log("Original number: " + n);
console.log("Check the said number is Sastry number or not: " + test(n));
n = 328;
console.log("Original number: " + n);
console.log("Check the said number is Sastry number or not: " + test(n));
n = 28027683;
console.log("Original number: " + n);
console.log("Check the said number is Sastry number or not: " + test(n));
