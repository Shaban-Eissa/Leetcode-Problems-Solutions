/**
 * @param {number[]} nums
 * @return {number}
 */
function minOperations(nums) {
  let n = nums.length;
  let operations = 0;

  for (let i = 0; i <= n - 3; i++) {
    if (nums[i] === 0) {
      for (let j = 0; j < 3; j++) {
        nums[i + j] = nums[i + j] === 0 ? 1 : 0;
      }
      operations++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      return -1;
    }
  }

  return operations;
}