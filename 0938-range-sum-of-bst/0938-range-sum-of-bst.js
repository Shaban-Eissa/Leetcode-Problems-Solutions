var rangeSumBST = function (root, low, high) {
  let sum = 0;
  let stack = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    if (node !== null) {
      if (node.val >= low && node.val <= high) {
        sum += node.val;
      }
      if (node.val > low) {
        stack.push(node.left);
      }
      if (node.val < high) {
        stack.push(node.right);
      }
    }
  }
  return sum;
};