/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 0) return false;
  if (nums.length === 1) return nums[0];

  let counter = {};
  for (let i = 0; i < nums.length; i++) {
    counter[nums[i]] ? (counter[nums[i]] += 1) : (counter[nums[i]] = 1);
  }

  for (let key in counter) {
    if (counter[key] === 1) {
      return key;
    }
  }

  return counter
};