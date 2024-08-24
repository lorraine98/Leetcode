/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

const MOD = 100000;

const getHashNumber = (str, table) => {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        res += table[str[i]];
    }
    return res;
}

var findAnagrams = function (s, p) {
    const hashTable = Array.from({ length: 26 }, (_, i) => {
        const char = String.fromCharCode(97 + i);
        const value = char.charCodeAt(0) * (31 ** (i + 1));
        return { [char]: value % MOD };
    }).reduce((acc, curr) => Object.assign(acc, curr), {});

    const answer = [];
    const pHash = getHashNumber(p, hashTable);

    let cur = getHashNumber(s.slice(0, p.length), hashTable);

    for (let i = 0; i < s.length; i++) {
        if (cur === pHash) {
            answer.push(i);
        }

        cur = cur - hashTable[s[i]] + hashTable[s[i + p.length]];
    }

    return answer;
};