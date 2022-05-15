/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length <= 1) {
        return nums.length;
    }
    
    const set = new Set(nums);
    
    let longestLen = 1;
    
    [...set].forEach(num => {
        if(!set.has(num) || set.has(num - 1)) {
            return;
        }
        
        let curLen = 1;
        set.delete(num);
        
        let nextConsecutiveNum = num + 1;
        
        while(set.has(nextConsecutiveNum)) {
            set.delete(nextConsecutiveNum);
            curLen++;
            nextConsecutiveNum++;
        }
        
        longestLen = Math.max(longestLen, curLen);
    });
    
    return longestLen;
};