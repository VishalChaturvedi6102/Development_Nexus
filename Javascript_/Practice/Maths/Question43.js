// Define a function named primeFactorsTo that generates an array of prime numbers up to a given maximum value.
// List Prime Numbers Up to N
// Write a JavaScript function to get all prime numbers from 0 to a specified number
// Test Data:
// console.log(primeFactorsTo(5));
// [2, 3, 5]
// console.log(primeFactorsTo(15));
// [2, 3, 5, 7, 11, 13]


function primeFactorsTo(max)
{
    var store  = [], 
        i, j, 
        primes = [];
    
    for (i = 2; i <= max; ++i) 
    {
        if (!store[i]) 
        {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}
console.log(primeFactorsTo(5));
console.log(primeFactorsTo(15));
