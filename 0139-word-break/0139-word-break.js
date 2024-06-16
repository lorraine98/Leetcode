// /**
//  * @param {string} s
//  * @param {string[]} wordDict
//  * @return {boolean}
//  */
// var wordBreak = function (s, wordDict) {
//     const set = new Set();
//     for (const word of wordDict) {
//         const splitedWord = word.split('');
//         for(let i = 0; i < s.length; i++) {
//             if(splitedWord[0] === s[i]) {
//                 if(word.slice(1, word.legnth) === s.slice(i + 1, word.length)) {
//                     set.add(word);
//                     s = s.slice(0, i) + s.slice(word.length, s.length);
//                 }
//             }
//         }
//     }
//     console.log(s, set)
// };

var wordBreak = function(s, wordDict) {
    
    let table = new Array(s.length + 1).fill(false);
    
    table[0] = true;
    
    for(let i = 0; i <= s.length; i++){
        if(table[i] === true){
			for(let word of wordDict){
				if(s.slice(i, i + word.length) === word){
					table[i + word.length] = true;
				}
			}
		}
    }
    return table[s.length];
};