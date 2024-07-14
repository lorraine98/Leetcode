/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxNum = 0;
    let frontIdx = 0;
    let backIdx = height.length - 1;

    while(frontIdx < backIdx) {
        let w = backIdx - frontIdx;
        let h = Math.min(height[frontIdx], height[backIdx]);

        maxNum = Math.max(maxNum, w * h);

        height[frontIdx] <= height[backIdx] ? frontIdx += 1 : backIdx -= 1;
    }

    return maxNum;
};