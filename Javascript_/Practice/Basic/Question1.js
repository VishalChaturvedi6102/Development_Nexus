/*
Display Current Day and Time

Write a JavaScript program to display the current day and  time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38

This JavaScript program retrieves the current date and time, determines the day of the week, and formats the current hour, minute, and second in 12-hour format with AM/PM notation. It then prints the day of the week and the formatted current time to the console. The program also handles special cases for "Noon" and "Midnight" to ensure an accurate representation.

Output :
Today is : Tuesday.
Current Time : 10 PM  : 30 : 38
*/





const today = new Date();

const day = today.getDay();

const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(`Today is: ${daylist[day]}.`);

let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

let prepand = (hour >= 12) ? " PM " : " AM ";

hour = (hour >= 12) ? hour - 12 : hour;

if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}

if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}

console.log(`Current Time: ${hour}${prepand} : ${minute} : ${second}`);
