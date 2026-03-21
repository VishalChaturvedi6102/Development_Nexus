// Define a function named dec_to_bho that takes a decimal number (n) and a base ('B', 'H', or 'O') as input.

// Decimal to Binary/Hex/Octal Conversion

// Write a JavaScript function to convert a decimal number to a binary, hexadecimal or octal number. Mathematics

// Test Data:
// console.log(dec_to_bho(120,'B'));
// console.log(dec_to_bho(120,'H'));
// console.log(dec_to_bho(120,'O'));
// "1111000"
// "78"
// "170"


dec_to_bho = function(n, base) {
    if (n < 0) {
        n = 0xFFFFFFFF + n + 1;
    } 

    switch (base) {
        case 'B':
            return parseInt(n, 10).toString(2);
            break;
        case 'H':
            return parseInt(n, 10).toString(16);
            break;
        case 'O':
            return parseInt(n, 10).toString(8);
            break;
        default:
            return("Wrong input.........");
    }
}
console.log(dec_to_bho(120,'B'));
console.log(dec_to_bho(120,'H'));
console.log(dec_to_bho(120,'O'));
