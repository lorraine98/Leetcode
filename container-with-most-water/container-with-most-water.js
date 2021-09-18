/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0
    let start = 0
    let end = height.length - 1
    
    while(start < end) {
        const min = height[start] < height[end] ? height[start] : height[end]
        if(maxArea < min * (end - start)) {
            maxArea = min * (end - start)
        }
        height[start] < height[end] ? start++ : end--
    }
    return maxArea
};