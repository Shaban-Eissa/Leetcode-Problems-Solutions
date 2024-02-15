/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let freq = {};
  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
  let max = Math.max(...Object.values(freq));

  let total = 0;
  for (let key in freq) {
    if (freq[key] === max) {
      total += freq[key];
    }
  }
  return total;
};