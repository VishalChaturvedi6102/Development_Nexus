// Last or Middle Character of Words
// Write a JavaScript program that takes text and returns the last character of each word if it is even in length. It also returns the middle character if it is odd in length.
// Test Data:
// ("Number of even numbers and their sum") -> "r, f, n, b, n, e, u"
// ("JavaScript Math and Numbers- Exercises Practice Solution") -> "t, h, n, -, c, e, n"



function test(text) {
  return text
    .split(" ") 
    .map((word) =>
      !(word.length % 2) ? word[word.length - 1] : word[Math.floor(word.length / 2)]
    ) 
    .join(", "); 
}

// Test cases
let text = "Number of even numbers and their sum";
console.log("Original string: " + text);
let result = test(text);
console.log("Processed string: " + result);

text = "JavaScript Math and Numbers- Exercises Practice Solution";
console.log("Original string: " + text);
result = test(text);
console.log("Number of even numbers and their sum: "+result);
