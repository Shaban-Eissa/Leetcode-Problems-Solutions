function containsDuplicate(nums: number[]): boolean {

  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (map.has(num)) return true
    map.set(num, i)
  }
  return false
};
console.log(containsDuplicate([1, 2, 3, 1]))