// Q: Write a function to reverse a string.
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello")); 
// Output: "olleh"



// Q: Check whether a string is a palindrome (reads the same backward).
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


// Q: Return the largest number from an array.
function findLargest(arr) {
  return Math.max(...arr);
}
console.log(findLargest([1, 4, 9, 2])); // Output: 9

// Q: Find the factorial of a number using a function.
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
