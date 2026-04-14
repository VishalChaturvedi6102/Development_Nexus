// Declare variables 'n1' and 'n2' and assign them string values representing dollar amounts.
// Currency Math Operations
// Write a JavaScript function to do currency math (add, subtract, multiply, divide etc.).
// Test Data :
// n1 = '$40.24', n2 = '$21.57';


var n1 = '$40.24';
var n2 = '$21.57';
var regp = /[^0-9.-]+/g;

console.log(parseFloat(n1.replace(regp, '')) + parseFloat(n2.replace(regp, '')));

console.log(parseFloat(n1.replace(regp, '')) - parseFloat(n2.replace(regp, '')));

console.log(parseFloat(n1.replace(regp, '')) * parseFloat(n2.replace(regp, '')));

console.log(parseFloat(n1.replace(regp, '')) / parseFloat(n2.replace(regp, '')));
