/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let convertedString = '';

    for (const el of s) {
        if (el === ' ') {
            continue;
        }

        const code = el.charCodeAt(0);

        if (code >= 97 && code <= 122) {
            convertedString += el;
        } else if (code >= 65 && code <= 90) {
            convertedString += el.toLowerCase();
        } else if (!Number.isNaN(+el)) {
            convertedString += el;
        }
    }

    if (convertedString.length <= 1) {
        return true;
    }

    let start = 0;
    let end = convertedString.length - 1;

    while (start < end) {
        if (convertedString[start] !== convertedString[end]) {
            return false;
        }
        start += 1;
        end -= 1;
    }

    return true;
};