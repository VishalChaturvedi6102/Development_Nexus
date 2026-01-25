


// Function to get the last n elements of an array
var last = function(array, n) {
  if (array == null) 
    return void 0;

  if (n == null) 
    return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
};

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));





// Insert dashes (-) between each two even digits of a specific number
var num = window.prompt();
var str = num.toString();
var result = [str[0]];

for (var x = 1; x < str.length; x++) {
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push('-', str[x]);
  } else {
    result.push(str[x]);
  }
}
console.log(result.join(''));




// Function to find two indices in the array 'nums' whose elements sum to the 'target_num'
function twoSum(nums, target_num) {
  var map = [];
  var indexnum = [];

  for (var x = 0; x < nums.length; x++) {
    if (map[nums[x]] != null) {
      var index = map[nums[x]];
      indexnum[0] = index;
      indexnum[1] = x;
      break;
    } else {

      map[target_num - nums[x]] = x;
    }
  }
  
  return indexnum;
}
console.log(twoSum([10,20,10,40,50,60,70], 50));




// Swap the case of each character of a string, upper case to lower and vice versa
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





// Compute the sum and product of an array of integers
var array = [1, 2, 3, 4, 5, 6];

var s = 0;
var p = 1;
for (var i = 0; i < array.length; i += 1) {

  s += array[i];
  p *= array[i];
}
console.log('Sum : ' + s + ' Product :  ' + p); 



//Remove duplicate items from an array, ignore case sensitivity
const nums = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];
const uniquenumSet = new Set(nums);
const uniqueNumsArray = [...uniqueNumsSet];
console.log(uniqueNumsArray);





// Function to find duplicates in an array
const find_duplicate_in_array = (arra1) => {

    const object = {};
    const result = [];

    arra1.forEach((item) => {
        if (!object[item]) {
            object[item] = 0;
        }
     
        object[item] += 1;
    });

    for (const prop in object) {
        if (object[prop] >= 2) {
            result.push(prop);
        }
    }
    return result;
};
console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));






// Function to calculate the sum of squares of elements in an array
const sum_sq = (array) => {
  let sum = 0;

  array.forEach((element) => {
    sum += Math.pow(element, 2);
  });
  return sum;
};

console.log(sum_sq([0, 1, 2, 3, 4]));



// Display Colors with Ordinals
// Write a JavaScript program to display the colors in the following way.
// Here is the sample array:
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Output
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."

const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
const Ordinal = (n) => {
  const o = ["th", "st", "nd", "rd"];
  const x = n % 100;
  return x + (o[(x - 20) % 10] || o[x] || o[0]);
};

color.forEach((_, index) => {
  const ordinal = index + 1;
  const output = `${Ordinal(ordinal)} choice is ${color[index]}.`;

  console.log(output);
});




//  find the difference of two arrays
const differenceOf2Arrays = (array1, array2) => {
  let temp = [];
  array1 = array1.toString().split(',').map(Number);
  
  array2 = array2.toString().split(',').map(Number);
  for (let i of array1) {
    if (array2.indexOf(i) === -1)
      temp.push(i);
  }

  for (let i of array2) {
    if (array1.indexOf(i) === -1)
      temp.push(i);
  }
  return temp.sort((a, b) => a - b);
};
console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));





// Function to find two indices in the array 'nums' whose elements sum to the 'target_num'
const twoSum = (nums, target_num) => {
  const map = [];

  const indexnum = [];

  for (let x = 0; x < nums.length; x++) {
    if (map[nums[x]] != null) {
      const index = map[nums[x]];
      indexnum[0] = index;
      indexnum[1] = x;
      break;
    } else {
      map[target_num - nums[x]] = x;
    }
  }
  return indexnum;
};

console.log(twoSum([10, 20, 10, 40, 50, 60, 70], 50));



// Convert an amount to coins

function amountToCoins(amount, coins) {
    if (amount <= 0 || !Array.isArray(coins) || coins.length === 0) {
        return [];
    }
    const result = [];
    let remainingAmount = amount;
    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        const count = Math.floor(remainingAmount / coin);
        for (let j = 0; j < count; j++) {
            result.push(coin);
        }
        remainingAmount %= coin;
    }

    return result;
}
const result = amountToCoins(46, [25, 10, 5, 2, 1]);
console.log(result); // Output: [25, 10, 10, 1]



// Define a function named insert that takes three parameters:
insert = function insert(main_string, ins_string, pos) {
   if(typeof(pos) == "undefined") {
    pos = 0;
  }

   if(typeof(ins_string) == "undefined") {
    ins_string = '';
  }
   return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
}

console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));



//  Retrieve the value of a specified property from all elements in an array
const library = [ 
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

const property_value = (array, property_key) => {
  const arr = [];
  for (const array_items of array) {
    if (array_items.hasOwnProperty(property_key)) {
      arr.push(array_items[property_key]);
    }
  }
  return arr;
};

console.log(property_value(library, 'title'));
console.log(property_value(library, 'author'));




 // Define a function named truncate that takes two parameters: a string (str) and the number of words to truncate to (no_words)
function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));



// Function to check if an array forms a factor chain
function test(nums) { 
  for (var i = 0; i < nums.length - 1; i++) 
  {
    if (nums[i + 1] % nums[i] != 0) {
      return false;            
    }
  }
  
  return true;
}
nums = [2, 4, 8, 16, 32];
console.log("Original array: ", nums);
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));


nums = [2, 4, 16, 32, 64];
console.log("Original array: ", nums);
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));


nums = [2, 4, 16, 32, 68];
console.log("Original array: ", nums);
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));




// Function to find the union of two arrays
const union = (arra1, arra2) => {
  if ((arra1 == null) || (arra2 == null))
    return void 0;
  const obj = {};
  for (let i = arra1.length - 1; i >= 0; --i)
    obj[arra1[i]] = arra1[i];
  for (let i = arra2.length - 1; i >= 0; --i)
    obj[arra2[i]] = arra2[i];
  const res = [];
  for (let n in obj) {
    if (obj.hasOwnProperty(n))
      res.push(obj[n]);
  }
  return res;
};

console.log(union([1, 2, 3], [100, 2, 1, 10]));







// Function to find the difference of two arrays
const differenceOfTwoArrays = (array1, array2) => {
  let temp = [];
  array1 = array1.toString().split(',').map(Number);
  array2 = array2.toString().split(',').map(Number);

  for (let i of array1) {
    if (array2.indexOf(i) === -1)
      temp.push(i);
  }
  for (let i of array2) {
    if (array1.indexOf(i) === -1)
      temp.push(i);
  }
  return temp.sort((a, b) => a - b);
};

console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));






// Function to check if all numbers in an array are prime
function test(arr_nums) {
  return arr_nums.every(n => !'1'.repeat(n).match(/^1?$|^(11+?)\1+$/));
}
nums = [2, 3, 5, 7];
console.log("Original array of integers: " + nums);
console.log("In the said array, check if every number is prime or not: " + test(nums));

nums = [2, 3, 5, 7, 8];
console.log("Original array of integers: " + nums);
console.log("In the said array, check if every number is prime or not: " + test(nums));









// Implement a stack with push and pop operations
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length == 0)
      return "Underflow";
    return this.items.pop();
  }
  peek() {
    if (this.items.length == 0)
      return "No elements in Stack";
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }  
  
displayStack(stack) {
  console.log("Stack elements are:");
  let str = "";
  for (let i = 0; i < stack.items.length; i++)
    str += stack.items[i] + " ";
  return str.trim();
 }      
}
console.log("Initialize a stack:")
let stack = new Stack();
console.log("Is the stack empty?");
console.log(stack.isEmpty()); 
console.log("Input some elements on the stack:")
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.displayStack(stack));
console.log("Top of the element of the stack:");
console.log(stack.peek()); 
console.log("Size of the stack:");
console.log(stack.size()); 
console.log("Remove one element from the stack:")
stack.pop();
console.log(stack.displayStack(stack));
console.log("Top of the element of the stack:");
console.log(stack.peek());  
console.log("Is the stack empty?");
console.log(stack.isEmpty());
console.log("Size of the stack:");
console.log(stack.size());




class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  getMiddleElements() {
    let middleIndex = Math.floor(this.size() / 2);
    let middleElements = [];
    if (this.size() % 2 === 0) {
      middleElements.push(this.items[middleIndex - 1]);
    }
    middleElements.push(this.items[middleIndex]);
    return middleElements;
  }  
  displayStack(stack) {
  console.log("Stack elements are:");
  let str = "";
  for (let i = 0; i < stack.items.length; i++)
    str += stack.items[i] + " ";
  return str.trim();
 }      
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.displayStack(stack));
console.log("Middle element(s):");
console.log(stack.getMiddleElements());
console.log("Add one more element:");
stack.push(4);
console.log(stack.displayStack(stack));
console.log("Middle element(s):");
console.log(stack.getMiddleElements());
console.log("Add two more elements:");
stack.push(5);
stack.push(6);
console.log(stack.displayStack(stack));
console.log("Middle element(s):");
console.log(stack.getMiddleElements());
console.log("Add one more element:");
stack.push(7);
console.log(stack.displayStack(stack));
console.log("Middle element(s):");
console.log(stack.getMiddleElements());



// Define a function named remove_non_word which takes a string parameter str
function remove_non_word (str) {
    if ((str===null) || (str===''))
       return false;
    else
       str = str.toString();
    var PATTERN = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;
    return str.replace(PATTERN, '');
}
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));




// Function to generate an array of numbers in a specified range
function array_range(start, len) 
{
  var arr = new Array(len);
  for (var i = 0; i < len; i++, start++) 
  {
    arr[i] = start;
  }
  return arr;
}
console.log(array_range(1, 4));
console.log(array_range(-6, 4));




// Function to get all possible subsets with a fixed length
function getSubsetsWithLength(arr, length) {
    const result = [];
    function generateSubsets(currentSubset, start) {
        if (currentSubset.length === length) {
            result.push([...currentSubset]); 
            return;
        }
        for (let i = start; i < arr.length; i++) {
            currentSubset.push(arr[i]);
            generateSubsets(currentSubset, i + 1);
            currentSubset.pop();
        }
    }
    generateSubsets([], 0);
    return result;
}
const inputArray = [1, 2, 3];
const subsetLength = 2;
const resultSubsets = getSubsetsWithLength(inputArray, subsetLength);
console.log(resultSubsets);








// Function to create an object indexed by a specified key
const indexOn = (arr, key) =>
  arr.reduce((obj, v) => {
    const { [key]: id, ...data } = v;
    obj[id] = data;
    return obj;
  }, {});

console.log(indexOn([
  { id: 10, name: 'apple' },
  { id: 20, name: 'orange' }
], x => x.id));








// Function to check if all numbers in an array are prime
function test(arr_nums) {
  for (n of arr_nums) {
    if (n == 1 || (n > 2 && n % 2 == 0)) 
      return false;
  }
  return true;
}

nums = [2, 3, 5, 7];
console.log("Original array of integers: " + nums);
console.log("In the said array, check if every number is prime or not: " + test(nums));
nums = [2, 3, 5, 7, 8];
console.log("Original array of integers: " + nums);
console.log("In the said array, check if every number is prime or not: " + test(nums));

