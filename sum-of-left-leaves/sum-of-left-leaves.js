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
var sumOfLeftLeaves = function(root) {
    
    let sumOfLeftLeaves = 0;
    
    function dfs(node, isLeft) {
        if(!node) {
            return;
        }
        dfs(node.left, true);
        dfs(node.right, false);
        if(isLeft && !node.left && !node.right) {
            sumOfLeftLeaves += node.val;
        }
    }
    
    dfs(root);
    return sumOfLeftLeaves;
};