/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zero = 0;
    let one = 0;

    for(const num of nums) {
        if(num === 0) {
            zero += 1;
        }
        if(num === 1) {
            one += 1;
        }
    }

    for(let i = 0; i < nums.length; i++) {
        if(zero) {
            nums[i] = 0;
            zero -= 1;
        } else if (one) {
            nums[i] = 1;
            one -= 1;
        } else {
            nums[i] = 2;
        }
    }
};