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
var findSecondMinimumValue = function (root) {
  if (root === null) return -1;
  let stack = [root];
  let min = root.val;
  let secondMin = Infinity;

  while (stack.length > 0) {
    let node = stack.pop();
    if (node.val > min && node.val < secondMin) {
      secondMin = node.val;
    }
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return secondMin === Infinity ? -1 : secondMin;
};