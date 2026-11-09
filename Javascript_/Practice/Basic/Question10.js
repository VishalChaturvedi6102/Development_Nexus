/*
Multiplication and Division (User Input)

Write a JavaScript program to calculate multiplication and division of two numbers (input from the user)
*/
const multiplyBy = () => {
    const num1 = document.getElementById("firstNumber").value;
    const num2 = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = num1 * num2;
};

const divideBy = () => { 
    const num1 = document.getElementById("firstNumber").value;
    const num2 = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = num1 / num2;
}; 
