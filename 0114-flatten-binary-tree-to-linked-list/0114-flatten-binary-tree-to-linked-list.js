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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let stack = [root];
  let prev = null;
  while (stack.length > 0) {
    let node = stack.pop();
    if (node === null) continue;
    stack.push(node.right);
    stack.push(node.left);
    if (prev !== null) {
      prev.left = null;
      prev.right = node;
    }
    prev = node;
  }
  return root;
};