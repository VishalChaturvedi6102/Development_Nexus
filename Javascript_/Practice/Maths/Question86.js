// Get Middle Character(s) of String
// Write a JavaScript program to get the middle character(s) from a given string.
// Test Data:
// ("abcd") -> "bc"
// ("abc") -> "b"
// ("JavaScript") -> "Sc"


function test(text) {
   
    var text_len = text.length;
    if (text_len % 2 != 0) {
        let start = (text_len - 1) / 2;
        return text.slice(start, start + 1);
    } else {
        let start = text_len / 2 - 1;
        return text.slice(start, start + 2);
    }
}

text = "abcd";
console.log("Original string: " + text);
console.log("Middle character(s) of the said string: " + test(text));
text = "abc";
console.log("Original string: " + text);
console.log("Middle character(s) of the said string: " + test(text));
text = "JavaScript";
console.log("Original string: " + text);
console.log("Middle character(s) of the said string: " + test(text));
