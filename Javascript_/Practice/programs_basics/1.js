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




// debounce
import { debounce } from 'lodash';

const searchInput = document.getElementById('search-input');

const debouncedSearch = debounce(() => {
  // Perform the search operation here
  console.log('Searching for:', searchInput.value);
}, 300);

searchInput.addEventListener('input', debouncedSearch)



// promise all
const promise1 = fetch('https://api.example.com/data/1');
const promise2 = fetch('https://api.example.com/data/2');
const promise3 = fetch('https://api.example.com/data/3');

Promise.all([promise1, promise2, promise3])
  .then((responses) => {
    // Executes only when all promises are resolved.
    console.log('All responses:', responses);
  })
  .catch((error) => {
    // Catches any error from any promise.
    console.error('Error:', error);
  });





  // deepequal
  function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    obj1 == null ||
    typeof obj1 !== 'object' ||
    obj2 == null ||
    typeof obj2 !== 'object'
  )
    return false;

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

// Example usage
const object1 = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
};

const object2 = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
};

console.log(deepEqual(object1, object2)); // true





// event emitter
const eventEmitter = new EventEmitter();

// Subscribe to an event
eventEmitter.on('customEvent', (data) => {
  console.log('Event emitted with data:', data);
});

// Emit the event
eventEmitter.emit('customEvent', { message: 'Hello, world!' });


// Print Numbers from 1 to N
// Time Complexity O(n)
const num = 10;

for (let i = 1; i <= num; i++) {
  console.log(i);
}


// numbers n to 1
// Time Complexity O(n)
const num1 = 10;
for (let i = 1; i <= num1; i++) {
  console.log(num - i + 1);
}




// debounce
/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait = 0) {
  let timeoutID = null;
  return function (...args) {
    clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      timeoutID = null; // Not strictly necessary but good to include.
      // Has the same `this` as the outer function's
      // as it's within an arrow function.
      func.apply(this, args);
    }, wait);
  };
}











