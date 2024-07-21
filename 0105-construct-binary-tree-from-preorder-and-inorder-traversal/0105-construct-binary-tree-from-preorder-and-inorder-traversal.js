/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// var buildTree = function(preorder, inorder) {
//     let inorderIdx = 0;

//     const node = new TreeNode(preorder[0]);

//     const insert = (n, ln, rn) => {
//         n.left = ln ?? null;
//         n.right = rn ?? null;
//     }

//     for(let i = 1; i < preorder.length; i += 2) {
//         const leftNodeVal = preorder[i];
//         const rigthNodeVal = preorder[i + 1];

//         insert(node, leftNodeVal, rigthNodeVal);

//         if (leftNodeVal === inorder[inorderIdx]) {

//         }
//     }
// };

const buildTree = (preorder, inorder) => {
  if (!preorder.length) return null;
  
  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};