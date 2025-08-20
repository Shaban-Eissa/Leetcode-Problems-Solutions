/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let nonZeroIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== nonZeroIndex) {
        [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
      }
      nonZeroIndex++;
    }
  }
};

console.log(moveZeroes([0, 1, 0, 2, 3]))