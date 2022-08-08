/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let newArr = [];
  for(let i = 0 ; i < nums.length ; i++) {
    
    for(let j = 0 ; j < i ; j++ ) {
        if(nums[i] + nums[j] === target) {
            newArr.push(j , i)
        }
    }
  }

  return newArr
};