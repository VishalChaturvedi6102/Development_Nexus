


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
