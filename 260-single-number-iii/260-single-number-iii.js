/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
     const counts = {};

  var result = []

  for (const num of nums) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  Object.entries(counts).map((item) => {
    if (item[1] === 1) {
       result.push(Number(item[0]))
      }
  });

  return result
};