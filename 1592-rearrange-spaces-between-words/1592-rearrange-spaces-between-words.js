/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    const splitSpace = text.split('');
    const splitWord = text.split(' ');
    const wordArr = [];
    let wordCnt = 0, spaceCnt = 0;
    let answer = '', blank = ' ';
    
    splitSpace.forEach(el => {
        if(el === ' ') {
            spaceCnt++;
        } 
    });
    
    splitWord.forEach(el => {
        if(el !== '') {
            wordArr.push(el);
            wordCnt++;
        }
    });
    
    if(wordCnt === 1) {
        return wordArr.pop() + blank.repeat(spaceCnt);
    }
    
    const value = parseInt(spaceCnt / (wordCnt - 1));
    const left = spaceCnt % (wordCnt - 1);
    
    wordArr.forEach((el, i) => {
        if(i !== wordArr.length - 1) {
            const addWord = el + blank.repeat(value);
            answer += addWord;
        }
        else {
            answer += el + blank.repeat(left);
        }
    });
    return answer;
};