/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
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



var findDifference = function (nums1, nums2) {

    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let FinalResult = [];
    let FirstPart = []
    let secondPart = []

    for (let num of nums1) {
        if (binarySearch(nums2, num) == -1 && !FirstPart.includes(num)) {
            FirstPart.push(num);
        }
    }

    for (let num of nums2) {
        if (binarySearch(nums1, num) == -1 && !secondPart.includes(num)) {
            secondPart.push(num);
        }
    }
    FinalResult.push(FirstPart);
    FinalResult.push(secondPart);
    return FinalResult;
};
