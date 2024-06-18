/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    let total = 0;
    let patches = 0;
    for (let i = 0; i < nums.length && total < n; i++){
        // if there the next number in the array is greater than the running total, then there exists a gap to be patched
        while (nums[i] > total + 1 && total < n){
            // add value greater than existing max to fill in gap
            total += total + 1
            patches++
        }
        total += nums[i]
    }
    while (total < n){
        // last set of patches for when n still hasn't been reached, but we've counted all the existing numbers in the array
        total += total + 1
        patches++
    }
    return patches
};