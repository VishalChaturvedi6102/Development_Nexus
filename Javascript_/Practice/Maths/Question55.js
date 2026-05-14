// Swap Variables
// Write a JavaScript program to swap variables from one to another.
// Swapping two variables refers to mutually exchanging the values of the variables. Generally, this is done with the data in memory.
// The simplest method to swap two variables is to use a third temporary variable :
// define swap(x, y)
// temp := x
// x := y
// y := temp

let x = 20;
let y = 40;
console.log("x=",x,"y=",y)
let temp;
temp = x;
x = y;
y = temp;
console.log("After swapping:")
console.log("x=",x,"y=",y)