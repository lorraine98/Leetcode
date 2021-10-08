/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length === 1) {
        return true;
    }
    let max = nums[0];
    
    for(let i=0; i<nums.length; i++) {
        if(max < i) {
            return false;
        }
        max = Math.max(max, i+nums[i]);
    }
    return true;
};