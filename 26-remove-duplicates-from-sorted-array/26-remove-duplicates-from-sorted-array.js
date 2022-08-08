/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
let uniques = new Set();

  for (let i = 0; i < nums.length; ) {
    if (uniques.has(nums[i])) {
      nums.splice(i, 1);
    } else {
      uniques.add(nums[i]);
      i++;
    }
  }
  return nums.length;
};