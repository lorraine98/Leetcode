/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let zeroIdxArr = [];
    let totalMultiply = 1;
    const len = nums.length;
    const answer = Array(len).fill(0);

    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            zeroIdxArr.push(i);

            if (zeroIdxArr.length > 1) {
                return answer;
            }
        } else {
            totalMultiply *= nums[i];
        }
    }

    if (zeroIdxArr.length > 0) {
        const zeroIdx = zeroIdxArr.pop();
        answer[zeroIdx] = totalMultiply;
        return answer;
    } else {
        for (let k = 0; k < len; k++) {
            answer[k] = totalMultiply / nums[k];
        }
    }

    return answer;
};