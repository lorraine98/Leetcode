/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    const set = new Set();
    let len = nums.length;
    let j = 0;
    let i = 0;
    let sum = 0;
    let res = 0;

    while(j < len && i < len){
        if(set.has(nums[j])){
            sum -= nums[i];
            set.delete(nums[i]);
            i++;
        }
        else{
            sum += nums[j];
            res = Math.max(sum, res);
            set.add(nums[j]);
            j++;
        }
    }
    
    return res;
};