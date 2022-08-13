/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
      var count = 0
  for(let i = 0 ; i < nums.length ; i++) {
    for(let j = 0 ; j <  nums.length ; j++) {
      var result = nums[i]-nums[j]
      if(Math.abs(result) === k && i < j ) {
        count += 1
      }
    }
  }

  return count
};