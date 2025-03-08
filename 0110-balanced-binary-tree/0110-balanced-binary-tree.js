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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) {
        return true;
    }

    const dfs = (node) => {
        if(!node) {
            return 0;
        }
        const ld = dfs(node.left);
        const rd = dfs(node.right);

        if (ld === -1 || rd === -1 || Math.abs(ld - rd) > 1) {
            return -1;
        }

        return Math.max(ld, rd) + 1;
    }
    
    return dfs(root) !== -1;
};