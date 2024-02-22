/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  arr.sort((a, b) => a - b);
  let length = arr.length;
  let fivePercent = Math.floor(length * 0.05);
  let sum = 0;
  for (let i = fivePercent; i < length - fivePercent; i++) {
    sum += arr[i];
  }
  return sum / (length - fivePercent * 2);
};