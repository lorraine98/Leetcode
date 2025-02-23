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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    if (!root) {
        return [];
    }

    const answer = [];
    const go = (node, path, sum) => {
        if (!node) {
            return;
        }

        if (sum === targetSum && !node.left && !node.right) {
            answer.push([...path]);
        }


        if (node.left) {
            path.push(node.left.val);
            go(node.left, path, node.left.val + sum);
            path.pop();
        }

        if (node.right) {
            path.push(node.right.val);
            go(node.right, path, node.right.val + sum);
            path.pop();
        }
    }

    go(root, [root.val], root.val);

    return answer;
};