// Sum Two Non-Negative Integers (Strings)
// Write a JavaScript program to compute the sum of two non-negative integers num1 and num2 represented by strings. 
// Test Data:
// ("123", "123") -> 246
// ("45", "100") -> 145

function test(n1, n2) {
    var str = '';
    var carry = 0;
    var num1 = n1.length - 1;
    var num2 = n2.length - 1;
    var sum_of_two;
    while (num1 >= 0 || num2 >= 0) {
        sum_of_two = (parseInt(n1[num1]) || 0) + (parseInt(n2[num2]) || 0) 
        sum_of_two += carry ? 1 : 0;
        
        if (sum_of_two > 9) {
            carry = 1;
            str = sum_of_two % 10 + str;
        } else {
            str = sum_of_two + str;
            carry = 0;
        }
        num1--;
        num2--;
    }
    if (carry) {
        str = 1 + str;
    }
    return str;
}
console.log(test("123", "123"));
console.log(test("45", "100"));
