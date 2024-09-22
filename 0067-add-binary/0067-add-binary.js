/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const max = Math.max(a.length, b.length);
    let answer = '';
    let temp = 0;

    for (let i = 1; i <= max; ++i) {
        const one = +(a[a.length - i] ?? 0);
        const two = +(b[b.length - i] ?? 0);

        let res = one + two + temp;

        if (res >= 2) {
            temp = 1;
            res -= 2;
        } else {
            temp = 0;
        }
        answer = res + answer;
    }

    return !!temp ? temp + answer : answer;
};