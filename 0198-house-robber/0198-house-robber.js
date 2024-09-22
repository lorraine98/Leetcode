/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const memo = Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; ++i) {
        memo[i] = Math.max((memo[i - 1] ?? 0), (memo[i - 2] ?? 0) + nums[i]);
    }

    return Math.max(...memo);
};