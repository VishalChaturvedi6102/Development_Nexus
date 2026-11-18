/*
Difference Between Number and 19 (Triple if >19)

Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.

This JavaScript program computes the absolute difference between a specified number and 19. If the specified number is greater than 19, it returns triple the absolute difference. It utilizes conditional statements to check the given condition and perform the appropriate computation.

*/

const diff_num = (n) => {

    if (n <= 19) {

    return 19 - n;
  } else {
    return (n - 19) * 3;
  }
};

console.log(diff_num(12));

console.log(diff_num(19));

console.log(diff_num(22));
