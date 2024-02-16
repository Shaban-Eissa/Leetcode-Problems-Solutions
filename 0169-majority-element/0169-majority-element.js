/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
  let freq = {};
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (freq[nums[i]]) {
      freq[nums[i]]++;
    } else {
      freq[nums[i]] = 1;
    }
  }

  Object.entries(freq).map((element) => {
    if (element[1] > Math.floor(nums.length / 2)) {
      result = Number(element[0]);
    }
  });
  return result;
};