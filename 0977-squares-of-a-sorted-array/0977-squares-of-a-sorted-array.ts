function sortedSquares(nums: number[]): number[] {
  let left = 0
  let right = nums.length - 1
  let result: number[] = []

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result.push(nums[left++] ** 2)
    }
    else {
      result.push(nums[right--] ** 2)
    }
  }
  return result.reverse()
};

console.log(sortedSquares([-4, -1, 0, 3, 10]))