function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let map = new Map()
  let duplicatedNumberIndex
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (map.has(num)) {
      duplicatedNumberIndex = map.get(num)
      if (i - duplicatedNumberIndex <= k) return true
    }
    map.set(num, i)
  }
  return false
};
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))