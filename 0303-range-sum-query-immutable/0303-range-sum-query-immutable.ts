class NumArray {
  private prefix: number[]
  constructor(nums: number[]) {
    this.prefix = new Array(nums.length)
    this.prefix[0] = nums[0]

    for (let i = 1; i < nums.length; i++) {
      this.prefix[i] = this.prefix[i - 1] + nums[i]
    }
  }

  sumRange(left: number, right: number): number {
    if (left === 0) return this.prefix[right]
    return this.prefix[right] - this.prefix[left - 1]
  }
}

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/