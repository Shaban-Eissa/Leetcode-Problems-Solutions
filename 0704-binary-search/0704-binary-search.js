/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
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


var search = function (nums, target) {
    if (binarySearch(nums, target) !== -1) {
        return nums.indexOf(target);
    }
    return -1
};