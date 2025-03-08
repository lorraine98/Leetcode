/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length;
    const mod = k % len;
    const arr = nums.splice(0, len - mod);
    nums.push(...arr);
};