/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let reversedArray = [...new Set(nums)].sort((a, b) => b - a);
  let ThreeMaxNumbers = [reversedArray[0], reversedArray[1], reversedArray[2]];

  if (ThreeMaxNumbers[2] === undefined) {
    return ThreeMaxNumbers[0];
  } else {
    return ThreeMaxNumbers[2];
  }
};