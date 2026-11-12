/*
Create Variable with User-Defined Name

Write a JavaScript exercise to create a variable using a user-defined name.

This JavaScript exercise involves creating a variable with a name provided by the user dynamically during runtime. It typically utilizes the eval() function or the object bracket notation window[name] to achieve this dynamic variable creation based on user input. However, it's important to handle user input securely to prevent code injection vulnerabilities.
*/


// Declare a constant variable named var_name and assign it the string 'abcd'
const var_name = 'abcd';

// Declare a constant variable named n and assign it the number 120
const n = 120;

// Assign the value of n to the property named 'abcd' of the 'this' object
this[var_name] = n;

// Log the value of the property 'abcd' of the 'this' object to the console
console.log(this[var_name]);
