/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let pivotIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j++) {
      leftSum += nums[j];
    }
    for (let j = i + 1; j < nums.length; j++) {
      rightSum += nums[j];
    }
    if (leftSum === rightSum) {
      pivotIndex = i;
      break;
    } else if (pivotIndex == 0 && leftSum === 0 && rightSum === 0) {
      pivotIndex = 0;
    } else if (
      pivotIndex == nums.length - 1 &&
      leftSum === 0 &&
      rightSum === 0
    ) {
      pivotIndex = nums.length - 1;
    } else {
      pivotIndex = -1;
    }
  }
  return pivotIndex;
};