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
var deepestLeavesSum = function(root) {
    const lastNodes = [];
    let maxDepth = 0;
    let answer = 0;
    
    const dfs = (node, depth) => {
        if(!node.left && !node.right) {
            maxDepth = Math.max(maxDepth, depth);
            lastNodes.push([node.val, depth]);
            return;
        }
        
        node.right && dfs(node.right, depth + 1);
        node.left && dfs(node.left, depth + 1);
    }
    
    dfs(root, 0);
    
    lastNodes.forEach(node => {
        const [curNode, nodeDepth] = node;
        if(nodeDepth === maxDepth) {
            answer += curNode;
        }
    })
    
    return answer;
};