/**
 * @param {number[]} nums
 * @return {number}
 */

// f(x) = f(x+1) + 1
var longestConsecutive = function (nums) {
    const map = new Map();
    let answer = 0;

    for (const num of nums) {
        map.set(num, 0);
    }

    const find = (num) => {
        const next = num + 1;
        if (!map.has(next)) {
            map.set(num, 1);
            return 1;
        }

        if (map.get(next) !== 0) {
            map.set(num, map.get(next) + 1);
            return map.get(next) + 1;
        }

        const len = find(next) + 1;
        map.set(num, len);
        return len
    }

    for (const num of nums) {
        const length = find(num);
        answer = Math.max(answer, length);
    }

    return answer;
};