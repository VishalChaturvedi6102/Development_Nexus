// Define a function named Hamming that generates a sequence of Hamming numbers up to the nth number.
//Generate First 20 Hamming Numbers
//Write a JavaScript function to show the first twenty Hamming numbers. Hamming numbers are numbers with prime factors of 2, 3 and 5


function Hamming(n) {
    var succession = [1];
    var length = succession.length;
    var candidate = 2;
    while (length < n) {
        if (isHammingNumber(candidate)) {
            succession[length] = candidate;
            length++;
        }
        candidate++;
    }
    return succession;
}

function isHammingNumber(num) {
    while (num % 5 === 0) num /= 5;
    while (num % 3 === 0) num /= 3;
    while (num % 2 === 0) num /= 2;
    return num == 1;
}
console.log(Hamming(20));
