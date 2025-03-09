/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;  // k가 nums.length보다 클 경우 처리
    nums.reverse();
    nums.splice(0, k, ...nums.slice(0, k).reverse());
    nums.splice(k, nums.length - k, ...nums.slice(k).reverse());
};;