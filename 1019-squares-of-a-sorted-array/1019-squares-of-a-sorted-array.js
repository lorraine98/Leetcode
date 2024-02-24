/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 처음에 시도한 코드
// return nums.map(num => num ** 2).sort((a, b) => a - b);

var sortedSquares = function (nums) {
    const answer = [];
    const numsLen = nums.length;
    let left = 0;
    let right = numsLen - 1;

    for(let i = numsLen - 1; i >= 0; i--) {
        const leftSqurt = nums[left] ** 2;
        const rightSqurt = nums[right] ** 2;

        if(leftSqurt >= rightSqurt) {
            answer[i] = leftSqurt;
            left += 1;
        }
        else {
            answer[i] = rightSqurt;
            right -= 1;
        }
    }

    return answer;
};