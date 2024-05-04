/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let left = 0;
    let right = nums.length - 1;
    let count = 0;
    nums.sort((a, b) => a - b);
    while (left < right) {
        if (nums[left] + nums[right] === k) {
            count++;
            left++;
            right--;
        } else if (nums[left] + nums[right] < k) {
            left++;
        } else {
            right--;
        }
    }
    return count;
};