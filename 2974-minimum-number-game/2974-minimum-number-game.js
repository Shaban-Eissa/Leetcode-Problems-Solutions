/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length - 1; i += 1) {
    if (i % 2 === 0) {
      [sorted[i], sorted[i + 1]] = [sorted[i + 1], sorted[i]];
    }
  }
  return sorted;
};