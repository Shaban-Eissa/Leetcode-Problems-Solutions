/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function (nums) {
    let sortedArray = nums.sort((a, b) => a - b);

    for (let i = 0; i <= sortedArray.length; i++) {
        if (nums[i] !== i) {
            return i
        }
    }
};
