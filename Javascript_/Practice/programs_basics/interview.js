
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

// const nestedArray = [1, [2, [3, [4, [5]]]]];
// const flatArray = flattenArray(nestedArray);

console.log(flatArray); // Output: [1, 2, 3, 4, 5]






// get
const user = { address: { city: 'New York' } };

console.log(_.get(user, 'address.city')); // 'New York'
console.log(user.address?.city); // 'New York'


// hoisting with var
console.log(foo); // undefined
var foo = 1;
console.log(foo); // 1

// hoisting with let, const and class
console.log(y); // ReferenceError
let y = 'local';


// functional hoisting
foo(); // 'FOOOOO'

function foo() {
  console.log('FOOOOO');
}

// Function expressions

console.log(bar); // undefined
bar(); // TypeError: bar is not a function

var bar = function () {
  console.log('BARRRR');
};




// higher-order function

// accept another func.
function greet(name) {
  return `Hello, ${name}!`;
}

function greetUser(greeter, name) {
  console.log(greeter(name));
}

greetUser(greet, 'Alice'); // Hello, Alice!


// Returns another function
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(4)); // 8



// event bubbling
const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', () => {
  console.log('Parent clicked');
});

child.addEventListener('click', () => {
  console.log('Child clicked');
});






// Event Delegation
const itemList = document.getElementById('item-list');

itemList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log(`Clicked on ${event.target.textContent}`);
  }
});



// this
function Person(name) {
  this.name = name;
}
const person = new Person('Alice');
console.log(person.name); // 'Alice'


// apply call bind
function greet() {
  console.log(this.name);
}
const persons = { name: 'Alice' };
greet.call(person); // 'Alice'

// method call : this
const obj = {
  name: 'Alice',
  greet() {
    console.log(this.name);
  },
};
obj.greet(); // 'Alice'


// Free function call
function greet(){
  console.log(this);
}
greet();


// arrow functions: this
const obj1 = {
  name: 'Alice',
  greet: () => {
    console.log(this.name); // Inherits `this` from enclosing scope
  },
};
obj.greet(); // undefined


// Function.prototype.bind
const john = {
  age: 42,
  getAge: function () {
    return this.age;
  },
};

console.log(john.getAge()); // 42

const unboundGetAge = john.getAge;
console.log(unboundGetAge()); // undefined

const boundGetAge = john.getAge.bind(john);
console.log(boundGetAge()); // 42

const mary = { age: 21 };
const boundGetAgeMary = john.getAge.bind(mary);
console.log(boundGetAgeMary()); // 21



// arrow functions in constructors
const Person = function (name) {
  this.name = name;
  this.sayName1 = function () {
    console.log(this.name);
  };
  this.sayName2 = () => {
    console.log(this.name);
  };
};

const johns = new Person('John');
const dave = new Person('Dave');

john.sayName1(); // John
john.sayName2(); // John

john.sayName1.call(dave); // Dave
john.sayName2.call(dave); // John








// null undefined not defined

let a;
console.log(a); // undefined

let bc = null;
console.log(b); // null

try {
  console.log(c); // ReferenceError: c is not defined
} catch (e) {
  console.log('c is undeclared');
}



// Function.prototype.bind
const johnn = {
  age: 42,
  getAge: function () {
    return this.age;
  },
};

console.log(john.getAge()); // 42

const unboundGetAges = john.getAge;
console.log(unboundGetAge()); // undefined

const boundGetAges = john.getAge.bind(john);
console.log(boundGetAge()); // 42

const marry = { age: 21 };
const boundGetAgeMarry = john.getAge.bind(mary);
console.log(boundGetAgeMary()); // 21




// var: function-scoped, can be redeclared
function f(){
  var x = 1;
  if(true){ var x = 2; console.log(x); } // 2
  console.log(x); // 2
}

// let/const: block-scoped
{
  let a = 1;
  const b = 2;
  // a = 3; b = 4; // allowed for a, not for b
}




// arrow functions — differences vs. regular functions
const objj = {
  id: 42,
  regular: function(){ return this.id; },
  arrow: () => this.id
};
console.log(obj.regular()); // 42
console.log(obj.arrow()); // undefined (or global this)



// object.create
const personPrototype = {
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  },
};


const personss = Object.create(personPrototype);
person.name = 'John';
person.greet(); // Hello, my name is John.






// prototype inheritence
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function () {
  console.log(`My name is ${this.name}`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function () {
  console.log('Woof!');
};

let fido = new Dog('Fido', 'Labrador');
fido.bark(); // "Woof!"
fido.sayName(); // "My name is Fido"







/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns the mean.
 */
export default function mean(array) {
  let total = 0;

  // Calculate the sum of all numbers in the array.
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  // Calculate the mean from the sum.
  return total / array.length;
}





// pallindrom code
function isPalindrome(str) {
  // Convert to lowercase and remove non-alphanumeric characters for robust checking
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); 
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("Madam, I'm Adam")); // true (after cleaning)




// Define a function named humanize_format that takes a number num as input
humanize_format = function humanize(num) {
   if(typeof(num) == "undefined") return;
  if(num % 100 >= 11 && num % 100 <= 13)
        return num + "th";
        
        switch(num % 10) {
            case 1: return num + "st";
            case 2: return num + "nd";
            case 3: return num + "rd";
        }
        return num + "th";
    }
console.log(humanize_format());  
console.log(humanize_format(1));  
console.log(humanize_format(8));  
console.log(humanize_format(301));  
console.log(humanize_format(402));





// Function to clone an array
var array_Clone = function(arra1) {
  return arra1.slice(0);
};

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));





var str = 'c';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];

for (var x = 0; x < str.length; x++) {
  if (UPPER.indexOf(str[x]) !== -1) {
    result.push(str[x].toLowerCase());
  }
  else if (LOWER.indexOf(str[x]) !== -1) {
    result.push(str[x].toUpperCase());
  }
  else {
    result.push(str[x]);
  }
}
console.log(result.join(''));





// mergesort with recursion
Array.prototype.merge_Sort = function () {
  if (this.length <= 1) {
    return this;
  }
  var half = parseInt(this.length / 2);
  var left = this.slice(0, half).merge_Sort();
  var right = this.slice(half, this.length).merge_Sort();

  var merge = function (left, right) {
    var mergedArray = [];
    while (left.length > 0 && right.length > 0) {
      mergedArray.push((left[0] <= right[0]) ? left.shift() : right.shift());
    }
    return mergedArray.concat(left).concat(right);
  };
  return merge(left, right);
};
var inputArray = [34, 7, 23, 32, 5, 62];
var sortedArray = inputArray.merge_Sort();

console.log(sortedArray); 







// Define a function to check if a number is a power of four
const Power_of_four = (n) => {
     
      if (typeof n!= "number") {
          return 'It must be number!' // Return an error message
      }
      return n != 0 && (n & (n - 1)) == 0 && (n & 0xAAAAAAAA) == 0;
}
console.log(Power_of_four(256)) 
console.log(Power_of_four(4)) 
console.log(Power_of_four(2)) 
console.log(Power_of_four("16")) 
