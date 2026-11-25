/*
Add First Character to Front and Back of String

Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

This JavaScript program creates a new string by adding the first character of the given string to both the front and back. It retrieves the first character using charAt(0) or substring() function and then concatenates it with the original string twice, once at the beginning and once at the end, to form the new string

Output :
aaa
aaba
aabca
*/


function front_back(str) {
  
  first = str.substring(0, 1);
  return first + str + first;
}

console.log(front_back('a'));
console.log(front_back('ab'));
console.log(front_back('abc')); 
