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
var isUnivalTree = function (root) {
  let stack = [root];
  let value = root.val;
  while (stack.length > 0) {
    let node = stack.pop();
    if (node.val !== value) return false;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return true;
};