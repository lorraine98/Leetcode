/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let answer = 1;
    let turn;
    
    for(let i = 0; i < nums.length - 1; i++) {
        const diff = nums[i + 1] - nums[i];
        if(turn) {
            if(diff > 0 && turn === 'positive') {
                answer++;
                turn = 'negative';
            }
            else if(diff < 0 && turn === 'negative') {
                answer++;
                turn = 'positive';
            }
        }
        else {
            if(diff < 0) {
                turn = 'positive';
            } 
            else if(diff > 0) {
                turn = 'negative';
            }
        }
    }
    
    return answer + !!turn;
};