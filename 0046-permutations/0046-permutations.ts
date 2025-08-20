function permute(nums: number[]): number[][] {
  const result: number[][] = []

  function backtrack(path: number[], used: boolean[], nums: number[]) {
    if (path.length === nums.length) {
      result.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;   // already used this number

      // choose
      path.push(nums[i]);
      used[i] = true;

      backtrack(path, used, nums)

      // un-choose (backtrack)
      path.pop();
      used[i] = false;
    }
  }
  backtrack([], new Array(nums.length).fill(false), nums)
  return result
}
