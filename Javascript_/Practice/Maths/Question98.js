// Excel Column Number from Title
// Write a JavaScript program to get the column number (integer value) related to a column title as it appears in an Excel sheet.
// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28


function test(text) {
    text = text.toUpperCase(); 
    var cl_no = 0;
    var len = text.length; 
    for (var i = 0; i < len; i++) { 
        cl_no += (Math.pow(26, (len - i - 1)) * (text.charCodeAt(i) - 64)); 
    }
    return cl_no; 
}
// Test cases
text = "C";
console.log("Original text: " + text);
console.log("Excel column title related with the said column number: " + test(text));

text = "AD";
console.log("Original text: " + text);
console.log("Excel column title related with the said column number: " + test(text));

text = "ZX";
console.log("Original text: " + text);
console.log("Excel column title related with the said column number: " + test(text)); 
