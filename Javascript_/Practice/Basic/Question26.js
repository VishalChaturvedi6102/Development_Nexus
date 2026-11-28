/*
Add Last 3 Characters to Front and Back of String

Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

This JavaScript program creates a new string from a given string by taking its last three characters and appending them both at the front and back. It first checks if the length of the given string is three or more characters to ensure the operation is valid. Then, it extracts the last three characters and concatenates them with the original string, forming the desired result.


Output :-
abcabcabc
false
bcdabcdbcd

*/

function front_back3(str) {
  if (str.length >= 3) {
    
    str_len = 3;
   
    back = str.substring(str.length - 3);
    return back + str + back;
  } else {
    return false;
  }
}

console.log(front_back3("abc"));
console.log(front_back3("ab"));
console.log(front_back3("abcd")); 
