/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var goodNodes = function(root) {
    let answer = 0;
    
    const dfs = (node, max) => {
        if(!node) return;
        
        if(node.val >= max) answer += 1;
        max = Math.max(node.val, max);
        
        node.right && dfs(node.right, max);
        node.left && dfs(node.left, max);
    }
    
    dfs(root, root.val);
    
    return answer;
};