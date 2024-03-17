/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {
    const isExistArr = [];
    for(let i = 0; i < nums.length; i++) {
        isExistArr[nums[i]] = true;
    }

    for(let i = 0; i <= nums.length; i++) {
        if(!isExistArr[i]) {
            return i;
        }
    }
};