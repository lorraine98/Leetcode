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
 * @param {number} k
 * @return {number}
 */

const traverseInOrder = (node, result) => {
    if (node) {
        traverseInOrder(node.left, result);
        result.push(node.val);
        traverseInOrder(node.right, result);
    }
    return result;
}

var kthSmallest = function (root, k) {
    const res = traverseInOrder(root, []);
    return res[k - 1];
};