/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let max = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && nums.includes(-nums[i])) {
      max.push(-nums[i]);
    }
  }
  return max.length > 0 ? Math.max(...max) : -1;
};