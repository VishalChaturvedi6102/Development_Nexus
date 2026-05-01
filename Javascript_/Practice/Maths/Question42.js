// Define a function named product_Range that calculates the product of all integers in the range [a, b].
// Calculate Combination (nCr)
// Write a JavaScript function to calculate the combination of n and r.
// The formula is : n!/(r!*(n - r)!).
// Test Data :
// console.log(combinations(6, 2));
// 15
// console.log(combinations(5, 3));
// 10

function product_Range(a, b) {
  var prd = a,
      i = a;
 
  while (i++ < b) {
    prd *= i;
  }
  return prd;
}
function combinations(n, r) {
  if (n == r || r == 0) {
    return 1;
  } else {
    r = (r < n - r) ? n - r : r;
    return product_Range(r + 1, n) / product_Range(1, n - r);
  }
}
console.log(combinations(6, 2));
console.log(combinations(5, 3));
