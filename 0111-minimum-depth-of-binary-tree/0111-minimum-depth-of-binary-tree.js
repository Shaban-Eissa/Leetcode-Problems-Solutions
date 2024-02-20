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
var minDepth = function (root) {
  if (root === null) return 0;
  let left = minDepth(root.left);
  let right = minDepth(root.right);
  if (root.left === null || root.right === null) {
    return Math.max(left, right) + 1;
  } else {
    return Math.min(left, right) + 1;
  }
};
