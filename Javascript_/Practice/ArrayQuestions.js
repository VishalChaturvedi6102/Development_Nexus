


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
