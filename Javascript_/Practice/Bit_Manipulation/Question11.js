// Check kth Bit

// Write a JavaScript program to check whether the kth bit is set or not in a given number. Return true if the kth bit is set otherwise false.
// In a binary representation the presence of a non-zero value indicates that the k'th bit is set.

// Test Data:
// (33, 1) -> true
// Explanation:
// Binary format of 33 is -> 100001
// K =1 -> kth bit is 1 [Non-zero value indicates that the k'th bit is set.]
// (33, 2) -> false
// Explanation:
// Binary format of 33 is -> 100001
// K =2 -> kth bit is 0 [Zero value indicates that the k'th bit is not set.]

 
 const turn_On_Kth_Bit = (n, k) => {
 if (typeof n!= "number") {
     return 'It must be number!'
     }
   return (n & (1 << (k - 1))) != 0;
 }
n = 33
k = 1
console.log(n + " in binary is " + n.toString(2))
console.log("k = "+k);
result_n = turn_On_Kth_Bit(n, k);
console.log("Check kth bit is set or not in the said number! " + result_n)
n = 33
k = 2
console.log(n + " in binary is " + n.toString(2))
console.log("k = "+k);
result_n = turn_On_Kth_Bit(n, k);
console.log("Check kth bit is set or not in the said number! " + result_n)
