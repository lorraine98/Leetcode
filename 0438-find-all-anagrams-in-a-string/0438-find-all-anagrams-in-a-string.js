/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const hashTable = {
    a: 97,
    b: 196,
    c: 297,
    d: 400,
    e: 505,
    f: 612,
    g: 721,
    h: 832,
    i: 945,
    j: 1060,
    k: 1177,
    l: 1296,
    m: 1417,
    n: 1538,
    o: 1661,
    p: 1786,
    q: 1913,
    r: 2040,
    s: 2171,
    t: 2304,
    u: 2439,
    v: 2576,
    w: 2715,
    x: 2856,
    y: 2999,
    z: 3144
}

const getHashNumber = (str) => {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        res += hashTable[str[i]];
    }
    return res;
}

var findAnagrams = function (s, p) {
    const answer = [];

    const sLen = s.length;
    const pLen = p.length;
    const pHash = getHashNumber(p);
    console.log('a', pHash)

    let prev = 0;
    let cur = getHashNumber(s.slice(0, pLen));

    for (let i = 0; i < sLen; i++) {
        if (cur === pHash) {
            answer.push(i);
        }

        prev = hashTable[s[i]];
        cur = cur - prev + hashTable[s[i + pLen]];
    }

    return answer;
};