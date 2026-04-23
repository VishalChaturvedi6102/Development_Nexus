// Define a function named radians_to_degrees that converts radians to degrees.
// Convert Radians to Degrees
// Write a JavaScript function to convert radians to degrees.
// Test Data : console.log(radians_to_degrees(0.7853981633974483));
// 45

function radians_to_degrees(radians)
{
  let pi = Math.PI;
  return radians * (180/pi);
}
console.log(radians_to_degrees(0.7853981633974483));
