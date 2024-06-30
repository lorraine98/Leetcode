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
const dfs = (node, depth, answer) => {
    if (!node) {
        return;
    }

    answer[depth] = node.val;

    dfs(node.left, depth + 1, answer);
    dfs(node.right, depth + 1, answer);

    return answer;
}

var rightSideView = function (root) {
    if (!root) {
        return [];
    }

    return dfs(root, 0, []);
};