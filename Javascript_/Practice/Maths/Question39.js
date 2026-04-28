// Define a function named thousands_separators that adds thousands separators to a number.
// Format Integer with Thousands Separator
// Write a JavaScript function to print an integer with thousands separated by commas.
// Test Data:
// console.log(thousands_separators(1000));
// "1,000"
// console.log(thousands_separators(10000.23));
// "10,000.23"
// console.log(thousands_separators(100000));
// "100,000"


function thousands_separators(num)
{
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}
console.log(thousands_separators(1000));
console.log(thousands_separators(10000.23));
console.log(thousands_separators(100000));