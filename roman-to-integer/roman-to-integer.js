const symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = function(s) {
    let sum = 0;
    for(let i=0; i<s.length; i++) {
        symbols[s[i]] < symbols[s[i+1]] ? sum -= symbols[s[i]] : sum+= symbols[s[i]]
    }
    return sum;
}