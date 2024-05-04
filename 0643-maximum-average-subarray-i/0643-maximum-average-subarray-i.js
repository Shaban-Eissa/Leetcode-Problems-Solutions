/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxSum = -Infinity;
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];

        if (i >= k - 1) {
            maxSum = Math.max(maxSum, currentSum);
            currentSum -= nums[i - k + 1];
        }
    }
    return maxSum / k;
};