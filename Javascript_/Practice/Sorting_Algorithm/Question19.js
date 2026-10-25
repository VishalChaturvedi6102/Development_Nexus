/*
Sort Characters in String

Write a JavaScript program to sort the characters in a string alphabetically.

Use the spread operator (...), Array.prototype.sort() and String.prototype.localeCompare() to sort the characters in str.
Recombine using String.prototype.join('').

Output :
aabbceg
*/


const sortCharactersInString = str =>
  [...str].sort((a, b) => a.localeCompare(b)).join('');
 
console.log(sortCharactersInString('cabbage'));