/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    
    if(s.length <= 2) {
        return true
    }
    
    let left = 0, right = s.length-1
    
    while(left < right) {
        
        if(s[left] !== s[right]) {
            return isPalindrome(s, left +1, right) || isPalindrome(s, left , right-1)
        }
        left++
        right--
    }
    return true
    
    
};

function isPalindrome(str, left, right) {
    while(left < right) {
        if(str[left] !== str[right]) {
            return false
        }
        left++
        right--
    }
    return true
}