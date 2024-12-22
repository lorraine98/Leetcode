/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const magazineCharCnt = {};

    for (const m of magazine) {
        magazineCharCnt[m] = magazineCharCnt[m] ? magazineCharCnt[m] + 1 : 1;
    }

    for (const r of ransomNote) {
        if (magazineCharCnt[r]) {
            magazineCharCnt[r] = magazineCharCnt[r] - 1;
        } else {
            return false;
        }
    }

    return true;
};