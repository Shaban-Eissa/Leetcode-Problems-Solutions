function countKDifference(nums: number[], k: number): number {
  let count = 0
  let map = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (map.has(num + k)) count += map.get(num + k)!
    if (map.has(num - k)) count += map.get(num - k)!

    map.set(num, (map.get(num) ?? 0) + 1)
  }
  return count
};