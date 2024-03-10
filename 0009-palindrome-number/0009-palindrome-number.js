/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    const xArr = x.toString().split('');

    let leftIdx = 0;
    let rightIdx = xArr.length - 1;

    while (leftIdx < rightIdx) {
        if (xArr[leftIdx] === xArr[rightIdx]) {
            leftIdx += 1;
            rightIdx -= 1;
        } else {
            return false;
        }
    }

    return true;
};