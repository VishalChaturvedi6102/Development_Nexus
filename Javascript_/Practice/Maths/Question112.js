// Max Value by Digit Swap
// Write a JavaScript program to calculate the maximum value by swapping two digits in a given integer.
// Test Data:
// (100) -> 100
// (120) -> 210
// (129) -> 921


function test(n) {
    var n_str = n.toString();
    
    for (var i = 0; i < n_str.length; i++) {
        var t = n_str[i]; 
        var index = i; 
            
        for (var x = n_str.length - 1; x > i; x--) {
            if (n_str[x] > t) {
                t = n_str[x];
                index = x;
            }
        }
        if (t != n_str[i]) {
            var nums = n_str.split('');
            
            var tmp = nums[i];
            
            nums[i] = nums[index];
            nums[index] = tmp;
            
            return parseInt(nums.join(''));
        }
    }
    return n;
}

// Test cases
n = 100;
console.log("n = " + n);
console.log("Maximum value swapping two digits in the said integer: " + test(n));
n = 120;
console.log("n = " + n);
console.log("Maximum value swapping two digits in the said integer: " + test(n));
n = 129;
console.log("Maximum value swapping two digits in the said integer: " + test(n));
console.log("e: " + test(n));
