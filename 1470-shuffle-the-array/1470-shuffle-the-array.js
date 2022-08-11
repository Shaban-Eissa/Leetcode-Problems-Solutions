/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var firstHalf = []
  var secondHalf= []
  var result = []
  firstHalf.push(...nums.slice(0,n))
  secondHalf.push(...nums.slice(n,nums.length))
  

  for(let i = 0 ; i<firstHalf.length ; i++ ) {
    result.push(nums[i])
    result.push(secondHalf[i])
  }
  
  return result
};