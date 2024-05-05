/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const output = [];

    const permutation = (permu, rests, output) => {
        if (rests.length == 0) {
            return output.push(permu);
        }
        rests.forEach((v, idx) => {
            const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)]
            permutation([...permu, v], rest, output);
        })
    }

    permutation([], nums, output);

    return output;
};