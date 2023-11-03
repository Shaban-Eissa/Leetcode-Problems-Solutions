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
var checkTree = function(root) {
  if (root === null) {
        return true;
    }
    let leftVal = root.left ? root.left.val : 0;
    let rightVal = root.right ? root.right.val : 0;
    return root.val === leftVal + rightVal;  
};