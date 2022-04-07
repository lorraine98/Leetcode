/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let mid;
    
    while(low <= high) {
        mid = parseInt((low + high) / 2);
        
        if(nums[mid] === target) {
            let left = mid - 1;
            let right = mid + 1;
            
            while(nums[left] === target) {
                left -= 1;
            }
            while(nums[right] === target) {
                right += 1;
            }
            
            return [left + 1, right - 1];
        }
        
        if(nums[mid] > target) {
            high = mid - 1;    
        } 
        
        if(nums[mid] < target) {
            low = mid + 1;  
        } 
    }
    
    return [-1, -1];
};