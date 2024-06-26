/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let prefix = [];
    let suffix = [];

    for(let i = 0; i < nums.length; i++) {
        if(i === 0) {
            prefix[i] = 1;
        } else {
            prefix[i] = prefix[i-1] * nums[i-1];
        }
    }

    for(let i = nums.length - 1; i >= 0; i--) {
        if(i === nums.length - 1) {
            suffix[i] = 1;
        } else {
            suffix[i] = suffix[i+1] * nums[i+1];
        }
    }

    let result = []

    for(let i = 0; i < nums.length; i++) {
        result[i] = prefix[i] * suffix[i];
    }

    return result;
};