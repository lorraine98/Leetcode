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
var diameterOfBinaryTree = function (root) {
    if (!root.left && !root.right) {
        return 0;
    }

    let leftDepth = 0;
    let rightDepth = 0;

    const dfs = (node, depth, isRight) => {
        if (!node) {
            return;
        }

        if (isRight) {
            rightDepth = Math.max(depth, rightDepth);
        } else {
            leftDepth = Math.max(depth, leftDepth);
        }

        dfs(node.right, depth + 1, isRight);
        dfs(node.left, depth + 1, isRight);
    }

    dfs(root.right, 1, true);
    dfs(root.left, 1, false);

    return rightDepth + leftDepth;
};