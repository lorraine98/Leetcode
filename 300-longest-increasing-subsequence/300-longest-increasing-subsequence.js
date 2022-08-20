/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const len = nums.length;
    let dp = Array(len).fill(1);
    
    for(let i = 1; i < len; i++) {
        let val = 1
        for(let j = i - 1; j >= 0; j--) {
            if(nums[j] < nums[i] && val < dp[j] + 1) {
                val = dp[j] + 1;
            }
            dp[i] = val;
        }
    }
    
    return Math.max(...dp);
};