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

// Write a JavaScript function to check if a given string is a palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("racecar")); // Output: true



async function fetchMultipleData() {
  try {
    const [userData, postData] = await Promise.all([
      fetch('/api/users/1').then(res => res.json()),
      fetch('/api/posts').then(res => res.json())
    ]);
    console.log('User Data:', userData);
    console.log('Post Data:', postData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchMultipleData();



// Check if a Number is Even or Odd
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(num + " is Even");
  } else {
    console.log(num + " is Odd");
  }
}

checkEvenOdd(7); // Output: "7 is Odd"
