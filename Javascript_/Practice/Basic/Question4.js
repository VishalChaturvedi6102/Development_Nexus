/*
Calculate Area of Triangle (Sides: 5, 6, 7)

Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

This JavaScript program calculates the area of a triangle with sides of lengths 5, 6, and 7 using Heron's formula. It first computes the semi-perimeter (s) of the triangle, then uses it to find the area, which is logged to the console.

Output :
14.696938456699069
*/


const side1 = 5; 
const side2 = 6; 
const side3 = 7; 

const perimeter = (side1 + side2 + side3) / 2;

const area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));

console.log(area);
