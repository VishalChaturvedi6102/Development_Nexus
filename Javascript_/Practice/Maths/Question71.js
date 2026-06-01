// Prime Factors of a Number
// Write a JavaScript program to print all the prime factors of a given number

const Prime_Factors = (number) => {
  const result_factors = [];
  
  for (let i = 2; i * i <= number; i++) {
    while (number % i === 0) {
      result_factors.push(i);
      number = Math.floor(number / i);
    }
  }
  
  if (number > 1) {
    result_factors.push(number);
  }
    return result_factors;
};

console.log(Prime_Factors(75));  
console.log(Prime_Factors(18));  
console.log(Prime_Factors(101));
