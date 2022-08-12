/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    var result = [];
  for (let i = 0; i < nums.length; i++) {
    var freq = nums[2 * i];
    var repeat = nums[2 * i + 1];

    for (let j = 0; j < freq; j++) {
      result.push(repeat);
    }
  }

  return result
};