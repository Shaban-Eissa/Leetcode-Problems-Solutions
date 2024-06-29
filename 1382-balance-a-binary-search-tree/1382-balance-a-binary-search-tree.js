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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    if (!root.left && !root.right) return root
    let arr = []
    const dfs = node => {
        if (!node) return null
        dfs(node.left)
        arr.push(node.val)
        dfs(node.right)
    }
    dfs(root)

    const buildTree = (low, high) => {
        if (low >= high) return null
        let mid = Math.floor((low + high) / 2)
        const root = new TreeNode(arr[mid])
        root.left = buildTree(low, mid)
        root.right = buildTree(mid + 1, high)
        return root
    }

    return buildTree(0, arr.length)

};