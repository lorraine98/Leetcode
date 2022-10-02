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
var pathSum = function(root, targetSum) {
    const answer = [];

    if(!root) {
        return answer;
    }
    
    const dfs = (node, sum, nodePath) => {
        if(!node.left && !node.right) {
            const total = sum + node.val;
            if(total === targetSum) {
                answer.push([...nodePath, node.val]);
            }
            return;
        }

        nodePath.push(node.val);
        node.right && dfs(node.right, sum + node.val, nodePath);
        node.left && dfs(node.left, sum + node.val, nodePath);
        nodePath.pop();
    }

    dfs(root, 0, []);

    return answer;
};