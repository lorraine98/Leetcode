/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const memo = [...Array(s.length)].map(() => Array(s.length).fill(null));
    for(let len = s.length; len > 0; len--) {
        for(let left = 0; len + left - 1 < s.length; left++ ) {
            const right = left + len - 1;
            if(isPalindrom(s, left, right)) {
                return s.substring(left, right + 1);
            }
        }
    }
    
    
    function isPalindrom (str, left, right) {
        if(left < 0 || left > s.length || right < 0 || right > s.length) {
            return false;
        }
        if(memo[left][right] !== null) {
            return memo[left][right];
        }
        
        const len = right - left + 1;
        
        if(len <= 2) {
            memo[left][right] = str[left] === str[right];
        }
        else {
            memo[left][right] = str[left] === str[right] && isPalindrom(str, left + 1, right -1);
        }
        return memo[left][right];
    }
};