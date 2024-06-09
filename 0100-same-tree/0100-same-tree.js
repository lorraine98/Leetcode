/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let answer = true;

    const dfs = (node1, node2) => {
        if(!node1 && !node2) {
            return;
        } else if(!node1 || !node2) {
            answer = false;
            return;
        }

        if(node1.val !== node2.val) {
            answer = false;
            return;
        }

        dfs(node1.right, node2.right);
        dfs(node1.left, node2.left);
    }

    dfs(p, q);
    
    return answer;
};