// 17. Write a Program to print Fibonacci sequence up to n terms?
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.

// The fibonacci function generates the Fibonacci sequence up to n terms. It initializes two variables num1 (0) and num2 (1). In a loop, it prints num1, then calculates the next number as the sum of num1 and num2, updating them for the next iteration. Here, it prints 7 terms.

function fibonacci(n) {
    let num1 = 0, num2 = 1, nextNum;

    console.log("Fibonacci Sequence:");

    for (let i = 1; i <= n; i++) {
        console.log(num1);
        nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
    }
}

fibonacci(7);