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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0;
  return (
    dfs(root, targetSum) +
    pathSum(root.left, targetSum) +
    pathSum(root.right, targetSum)
  );
};

var dfs = function (root, targetSum) {
  if (!root) return 0;
  let count = 0;
  if (root.val === targetSum) {
    count++;
  }
  count += dfs(root.left, targetSum - root.val);
  count += dfs(root.right, targetSum - root.val);
  return count;
};

console.log(pathSum([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], 8)); // 3
