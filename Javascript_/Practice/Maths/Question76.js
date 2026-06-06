// Subtract Integers Without Arithmetic Operators
// Write a JavaScript program to subtract one integer from another, without using arithmetic operators such as -, %, /, +, etc. 
// Test Data:
// (200, 100) -> 100
// (200, 300) -> -100
// (-200, -300) -> 100
// (200, 200) -> 0

function test1(a, b)
{
    do 
    {
        let temp = (~a) & b;
        a = a ^ b;
        b = temp << 1;
    }
    while (b != 0) 
    return a;
}

console.log(test1(200, 100));
console.log(test1(200, 300));
console.log(test1(-200, -300));
console.log(test1(200, 200));
