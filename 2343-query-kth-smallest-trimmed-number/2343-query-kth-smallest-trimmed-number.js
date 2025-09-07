/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function (nums, queries) {
    const n = nums.length;
    const numLen = nums[0].length;
    const answer = [];

    for (const [k, trim] of queries) {
        const indices = Array.from({ length: n }, (_, i) => i);

        let left = 0;
        let right = n - 1;
        const targetIndex = k - 1;

        while (left <= right) {
            const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
            const finalPivotIndex = partition(indices, left, right, pivotIndex, trim);

            if (finalPivotIndex === targetIndex) {
                break;
            } else if (finalPivotIndex < targetIndex) {
                left = finalPivotIndex + 1;
            } else {
                right = finalPivotIndex - 1;
            }
        }
        answer.push(indices[targetIndex]);
    }

    return answer;

    function compare(idx1, idx2, trim) {
        const start = numLen - trim;
        const trimmed1 = nums[idx1].substring(start);
        const trimmed2 = nums[idx2].substring(start);

        if (trimmed1 < trimmed2) return -1;
        if (trimmed1 > trimmed2) return 1;

        return idx1 < idx2 ? -1 : 1;
    }

    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    function partition(arr, l, r, pIdx, trim) {
        const pivotOriginalIndex = arr[pIdx];
        swap(arr, pIdx, r);
        let storeIndex = l;

        for (let i = l; i < r; i++) {
            if (compare(arr[i], pivotOriginalIndex, trim) < 0) {
                swap(arr, storeIndex, i);
                storeIndex++;
            }
        }
        swap(arr, r, storeIndex);
        return storeIndex;
    }
};