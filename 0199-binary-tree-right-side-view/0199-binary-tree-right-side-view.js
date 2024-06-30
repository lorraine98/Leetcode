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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const answer = [];

    const dfs = (node, depth) => {
        if(!node) {
            return;
        }

        if(answer[depth] === undefined) {
            answer[depth] = node.val;
        }

        const newDepth = depth + 1;
        dfs(node.right, newDepth);
        dfs(node.left, newDepth);
    }

    dfs(root, 0);

    return answer;
};