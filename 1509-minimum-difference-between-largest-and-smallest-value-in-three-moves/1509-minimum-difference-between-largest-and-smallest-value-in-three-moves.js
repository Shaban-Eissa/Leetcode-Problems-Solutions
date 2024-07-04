/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
  if (nums.length <= 4) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let res = Number.MAX_VALUE;
  for (let i = 0; i <= 3; i++) {
    res = Math.min(res, nums[n - 4 + i] - nums[i]);
  }
  return res;
};

console.log(minDifference([5, 3, 2, 4])); // 0