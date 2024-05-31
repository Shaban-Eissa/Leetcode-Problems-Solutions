/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let FrequencyArray = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (FrequencyArray.has(nums[i])) {
      FrequencyArray.set(nums[i], FrequencyArray.get(nums[i]) + 1);
    } else {
      FrequencyArray.set(nums[i], 1);
    }
  }

  let result = [];
  for (let [key, value] of FrequencyArray) {
    if (value === 1) {
      result.push(key);
    }
  }
  return result;
};