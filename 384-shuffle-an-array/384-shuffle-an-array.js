/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
    this.arr = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const arr = this.arr;
    arr.forEach((_, idx) => {
        const randomIdx = Math.floor(Math.random() * arr.length);
        [arr[randomIdx], arr[idx]] = [arr[idx], arr[randomIdx]];
    });
    
    return this.arr;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */