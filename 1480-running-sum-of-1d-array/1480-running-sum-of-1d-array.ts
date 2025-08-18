/**
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(nums: number[]): number[] {
  let sum = 0
  return nums.map(x => sum += x)
};

console.log(runningSum([1, 2, 3, 4]));
