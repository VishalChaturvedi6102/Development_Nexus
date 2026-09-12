// Circle Area & Perimeter

// Write a JavaScript program to calculate circle area and perimeter.
// Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

// JavaScript: Area and circumference of a circle
// In geometry, the area enclosed by a circle of radius r is πr2. Here the Greek letter π represents a constant, approximately equal to 3.14159, which is equal to the ratio of the circumference of any circle to its diameter.
// The circumference of a circle is the linear distance around its edge.

// o/p :
// Area = 28.27
// VM1407:17 perimeter = 18.85


function circle(radius)
{
    this.radius = radius;
  // area 
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter 
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));
