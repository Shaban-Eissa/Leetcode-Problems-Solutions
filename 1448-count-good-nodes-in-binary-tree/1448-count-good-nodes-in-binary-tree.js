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

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
var goodNodes = function (root) {
  let count = 0;

  const dfs = (node, max) => {
    if (!node) return;
    if (node.val >= max) {
      count++;
      max = node.val;
    }
    dfs(node.left, max);
    dfs(node.right, max);
  };

  dfs(root, -Infinity);
  return count;
};