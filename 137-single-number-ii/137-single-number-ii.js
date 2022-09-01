/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
      const counts = {};

  var singleNumber = 0

  for (const num of nums) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  Object.entries(counts).map((item) => {
    if (item[1] === 1) {
       singleNumber = item[0]
      }
  });

  return singleNumber
};