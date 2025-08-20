function subsets(nums) {
  const result: number[][] = []
  function backtrack(start, path) {
    result.push([...path])
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i])
      backtrack(i + 1, path)
      path.pop()
    }
  }
  backtrack(0, [])
  return result
}

console.log(subsets([1, 2, 3]))