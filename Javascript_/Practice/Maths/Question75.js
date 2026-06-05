// Swap Three Numbers Without Third Variable
// Write a JavaScript program to swap three numbers without a third variable. 
// Test Data:
// (100, 200, 300) -> 300, 100, 200
function test(x, y, z)
{
    x = x + y + z;
    y = x - (y + z);
    z = x - (y + z);
    x = x - (y + z);
    return [x, y, z];  
}
 
x = 100; 
y = 200; 
z = 300;

console.log("Before swapping:")
console.log("x = "+x);
console.log("y = "+y);
console.log("z = "+z);

result = test(x, y, z);

console.log("After swapping:");
console.log("x = "+result[0]);
console.log("y = "+result[1]);
console.log("z = "+result[2]);
