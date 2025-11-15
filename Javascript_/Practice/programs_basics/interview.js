
// Difference Between let, var, and const
var a = 10;
let b = 20;
const c = 30;

a = 40; // OK
b = 50; // OK
// c = 60; // ❌ Error: Assignment to constant variable


// 2. Template Literals
let name = "dqwertyuio";
let age = 23;

console.log(`My name is ${name} and I am ${age} years old.`);
// Output: My name is Vishal and I am 23 years old.


//  3. Arrow Function vs Regular Function
// Regular Function
function add(a, b) {
  return a + b;
}










// Arrow Function
const addArrow = (a, b) => a + b;

console.log(add(2, 3));       // Output: 5
console.log(addArrow(2, 3));  // Output: 5


// 4. Hoisting Example
console.log(x); // Output: undefined (due to hoisting)
var x = 5;

// let and const are not hoisted in the same way:
// console.log(y); //  ReferenceError
// let y = 10;







// 5. Looping Over an Array
const fruits = ["apple", "banana", "mango"];

// Using for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Using for...of
for (let fruit of fruits) {
  console.log(fruit);
}


// Using forEach
fruits.forEach((fruit) => console.log(fruit));











// palindrome
function isPalindrome(str){
  return str === str.split('').reverse().join('');
}



function createMessage(prefix) {
  return function (message) { 
    console.log(prefix + " " + message);
  };
}
const sendMessage = createMessage("Hello"); 
sendMessage("Cess!");
(function () {      
}());

(function () {
  console.log(
    "roadmap.sh helps prepare for  JavaScript job interview questions"
  );
})();




// array.prototype reduce
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15


// Simplifying arrays – Flattening
const nestedArray = [1, [2, [3, [4, [5]]]]];
const flatArray = nestedArray.flat(Infinity);

console.log(flatArray); // Output: [1, 2, 3, 4, 5]

// Custom recursive array flattener
function flattenArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    [],
  );
}

const nestedArray = [1, [2, [3, [4, [5]]]]];
const flatArray = flattenArray(nestedArray);

console.log(flatArray); // Output: [1, 2, 3, 4, 5]





