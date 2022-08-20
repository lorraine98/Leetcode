/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let longestLen = 1;
    let dp = [];
    const len = nums.length;
    
    dp[0] = 1;
    
    for(let i = 1; i < len; i++) {
        let val = 1
        for(let j = i - 1; j >= 0; j--) {
            if(nums[j] < nums[i] && val < dp[j]+1) {
                val = dp[j]+1
            }
            dp[i] = val;
        }
    }
    
    return Math.max(...dp);
};