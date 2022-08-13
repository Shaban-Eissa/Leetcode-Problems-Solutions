/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums, first, second) {
    var result = []
  for(let i = 0 ; i < nums.length ; i++) {
    for(let j = i+1 ; j < nums.length ; j++) {
    result.push(((nums[i]-1)*(nums[j]-1)))
    }
  }

  return Math.max(...result)
};