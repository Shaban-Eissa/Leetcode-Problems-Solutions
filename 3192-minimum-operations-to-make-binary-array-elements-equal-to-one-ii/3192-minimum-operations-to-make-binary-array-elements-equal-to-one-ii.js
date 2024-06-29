/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  let flips = 0;
  let flipNeeded = false;

  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] === 0 && !flipNeeded) || (nums[i] === 1 && flipNeeded)) {
      flips++;
      flipNeeded = !flipNeeded;
    }
  }

  return flips;
};