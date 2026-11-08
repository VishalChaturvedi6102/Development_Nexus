/*
Days Left Before Christmas

Write a JavaScript program to  calculate the days left before  Christmas.

The JavaScript program calculates the number of days left until Christmas by comparing the current date with December 25th of the current year. If today is after December 25th, it calculates the days until next year's Christmas. The difference in days is then logged to the console.

Output:

349 days left until Christmas!
*/

const today = new Date();
const cmas = new Date(today.getFullYear(), 11, 25);

if (today.getMonth() === 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}

const one_day = 1000 * 60 * 60 * 24;
console.log(`${Math.ceil((cmas.getTime() - today.getTime()) / one_day)} days left until Christmas!`); 
