/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let answer = 0;
    let zeroCnt = 0;
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
            else if(diff === 0){
                zeroCnt++;
            }
        }
        else {
            if(diff < 0) {
                answer++;
                turn = 'positive';
            } 
            else if(diff > 0) {
                answer++;
                turn = 'negative';
            }
            else {
                zeroCnt++;
            }
        }
    }
    
    return zeroCnt === nums.length ? answer : answer + 1;
};