// 2. Binary to Decimal Conversion

// Write a JavaScript function to convert a binary number to a decimal number.
// Test Data :
// console.log(bin_to_dec('110011'));
// console.log(bin_to_dec('100'));
// 51
// 4


var base_convert = function(number, initial_base, change_base) {
 if (initial_base<2 || change_base<2 || initial_base>36 || change_base>36)
    return 'Base between 2 and 36';
    return parseInt(number + '', initial_base)
    .toString(change_base);
}
console.log(base_convert('E164',16,8));
console.log(base_convert(1000,2,8));
console.log(base_convert(10,1,2));
console.log(base_convert(10,-2,2)); 
