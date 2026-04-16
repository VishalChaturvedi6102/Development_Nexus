// Define a function named pointDirection that calculates the direction angle from point 1 to point 2.

// Calculate Degrees Between Two Points
// Write a JavaScript function to calculate degrees between 2 points with the inverse Y axis.
// Test Data :
// console.log(pointDirection(1, 0, 12, 0));
// 0
// console.log(pointDirection(1, 0, 1, 10));
// 90



function pointDirection(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}

console.log(pointDirection(1, 0, 12, 0));
console.log(pointDirection(1, 0, 1, 10));
