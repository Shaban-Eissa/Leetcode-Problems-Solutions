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
var distributeCoins = function (root) {
  let ans = 0;
  const dfs = (root) => {
    if (root === null) {
      return 0;
    }
    let left = dfs(root.left);
    let right = dfs(root.right);
    ans += Math.abs(left) + Math.abs(right);
    return root.val + left + right - 1;
  };
  dfs(root);
  return ans;
};