/*
Check Leap Year (Gregorian Calendar)

Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

The JavaScript program checks if a given year is a leap year by determining if it is divisible by 4 but not by 100, or if it is divisible by 400. It uses conditional statements to implement these rules and then prints whether the year is a leap year or not

Output :
true
true
false
false
false
*/
const leapyear = (year) => {

   return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
};

console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));
