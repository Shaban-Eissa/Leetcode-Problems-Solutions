/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
  let totalOnes = nums.reduce(
    (accumulator, value) => (value && ++accumulator) || accumulator,
    0
  );
  const block = nums.slice(0, totalOnes);
  let totalOnesInBlock = block.reduce(
    (accumulator, value) => (value && ++accumulator) || accumulator,
    0
  );
  let maxOnesInBlock = totalOnesInBlock;
  for (let index = 0; index < nums.length; index++) {
    if (nums[(index + totalOnes) % nums.length] === 1) {
      totalOnesInBlock += 1;
    }
    if (nums[index % nums.length] === 1) {
      totalOnesInBlock -= 1;
    }
    if (maxOnesInBlock < totalOnesInBlock) {
      maxOnesInBlock = totalOnesInBlock;
    }
  }
  return totalOnes - maxOnesInBlock;
};

console.log(minSwaps([0, 1, 0, 1, 1, 0, 0]));
