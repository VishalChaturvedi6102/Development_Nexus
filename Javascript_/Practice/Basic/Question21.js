/*
Add 'Py' to Start of String if Not Present

Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string. 

This JavaScript program creates a new string by adding "Py" in front of a given string. However, if the given string already begins with "Py", it returns the original string without any modification. It checks the initial characters of the given string to determine whether "Py" needs to be added or not.
*/


function string_check(str1) {
  if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') {
    return str1;
  }

  return "Py" + str1;
}

console.log(string_check("Python"));

console.log(string_check("thon"));

