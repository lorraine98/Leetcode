/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    const cnt = [0, 0];
    const map = new Map();
    let answer = 0;

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        cnt[num] += 1;
        const key = cnt[0] - cnt[1];

        if(key === 0) {
            answer = Math.max(answer, i + 1);
        } else if(map.has(key)) {
            answer = Math.max(answer, i - map.get(key));
        } else {
            map.set(key, i);
        }
    }
    
    return answer;
};