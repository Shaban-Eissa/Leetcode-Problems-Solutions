/**
 * @param {number[][]} nums
 * @return {number[]}
 */
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}



var intersection = function (nums) {
    
    for (let arr of nums) {
        arr.sort((a, b) => a - b);
    }

    let result = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        result = result.filter(num => binarySearch(nums[i], num) !== -1);
    }
    return result;
};