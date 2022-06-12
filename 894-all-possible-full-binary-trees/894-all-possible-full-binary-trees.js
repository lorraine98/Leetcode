/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const memo = new Map();

function allPossibleFBT(n) {
    if(n % 2 === 0) {
        return [];
    }
    
    let answer = [];
    
    if(n === 1) {
        answer.push(new TreeNode(0));
        return answer;
    }
    
    if(memo.has(n)) {
        return memo.get(n);
    }
    
    const nodeCntWithoutRoot = n - 1; 
    
    for(let i = 1; i < nodeCntWithoutRoot; i += 2) {
        const left = allPossibleFBT(i);
        const right = allPossibleFBT(nodeCntWithoutRoot - i);
        
        for(let l of left) {
            for(let r of right) {
                const cur = new TreeNode(0);
                cur.left = l;
                cur.right = r;
                
                answer.push(cur);
            }
        }
    }
    memo.set(n, answer);
        
    return memo.get(n);
};