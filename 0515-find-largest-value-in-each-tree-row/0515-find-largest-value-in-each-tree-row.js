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
 * @return {number[]}
 */
var largestValues = function (root) {
if (root === null) return [];
let stack = [root];
let result = [];
while (stack.length > 0) {
    let max = -Infinity;
    let length = stack.length;
    for (let i = 0; i < length; i++) {
        let node = stack.shift();
        max = Math.max(max, node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    result.push(max);
}
return result;
};