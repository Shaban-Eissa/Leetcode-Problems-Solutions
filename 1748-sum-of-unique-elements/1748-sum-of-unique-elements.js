/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  var count = {};

  var result = 0;
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = count[nums[i]] ? (count[nums[i]] += 1) : 1;
  }

  Object.entries(count).map((item) => {
    if (item[1] === 1) {
      result += Number(item[0]);
    }
  });

  return result;
};