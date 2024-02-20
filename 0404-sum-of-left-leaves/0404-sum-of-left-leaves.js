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
var sumOfLeftLeaves = function (root) {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return 0;

  let sum = 0;
  let stack = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    if (
      node.left !== null &&
      node.left.left === null &&
      node.left.right === null
    ) {
      sum += node.left.val;
    }
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return sum;
};
