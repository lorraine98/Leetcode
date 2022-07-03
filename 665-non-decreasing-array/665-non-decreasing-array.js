/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let editCnt = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < nums[i - 1]) {
            if(editCnt++ || i < nums.length - 1 && nums[i - 2] > nums[i] && nums[i + 1] < nums[i -1]) {
                return false;
            }
        }
    }
    return true;
};