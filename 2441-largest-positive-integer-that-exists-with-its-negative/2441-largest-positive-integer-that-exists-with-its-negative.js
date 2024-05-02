/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let answer = -1 
    let seen = new Set()

    for (let i = 0; i < nums.length; i++) {
        if (seen.has(-nums[i])) {
            answer = Math.max(answer, Math.abs(nums[i]))
        }
        seen.add(nums[i])
    }
    return answer
};