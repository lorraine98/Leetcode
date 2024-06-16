// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canPartition = function (nums) {
//     const mid = nums.reduce((a, b) => a + b, 0) / 2;

//     if (!Number.isInteger(mid)) {
//         return false;
//     }

//     let headIdx = 0;
//     let tailIdx = nums.length - 1;

//     nums.sort((a, b) => a - b);

//     let sum = mid;
//     let isTail = true;

//     while (headIdx < tailIdx) {
//         if (sum === 0) {
//             sum = mid;
//             isTail = true;
//         } else if (sum < 0) {
//             return false;
//         }

//         if (isTail) {
//             sum -= nums[tailIdx];
//             tailIdx -= 1;
//         } else {
//             sum -= nums[headIdx];
//             headIdx += 1;
//         }

//         isTail = !isTail;
//     }

//     return nums[headIdx] === sum || nums[headIdx] === mid;
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    var sum = nums.reduce((a, b) => a + b, 0);
    
    if (sum % 2 !== 0) {
        return false;
    }
    
    var half = sum / 2; // Never will have decimal, hence safe to just divide.
    
    // Now, our aim is to find if atleast one subarray has the sum equal to the value `half`
    // As we can be sure that the other half of the subarray will have the same value
    
    var dp = [];
    
    // Base cases
    dp[0] = true;
    
    for (var index = 0; index < nums.length; ++ index) {
        var num = nums[index];
        for (var i = half; i >= num; -- i) {
            dp[i] = (dp[i] || dp[i - num]);
        }
    }
    
    return dp[half] || false;
};