/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const max = Math.max(a.length, b.length);
    let answer = '';
    let temp = 0;

    let $a = a;
    let $b = b;

    for (let i = max - 1; i >= 0; i--) {
        const one = +$a.slice(-1);
        const two = +$b.slice(-1);
        $a = $a.slice(0, -1);
        $b = $b.slice(0, -1);

        let res = (!!(one && two) ? one + two : !!one ? one : two) + temp;

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