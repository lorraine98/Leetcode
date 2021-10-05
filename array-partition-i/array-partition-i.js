/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b)=> b-a);
    
    let arr = [];
    let answer = [];
    
    for(let i=0; i<nums.length; i++) {
        arr.push(nums[i]);
        if(arr.length === 2) {
            let min = Math.min(...arr);
            answer.push(min);
            arr = [];
        }
    }
    
    return answer.reduce((prev, cur) => prev + cur);
};