/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {

    let stack = []
    for (let i = 0; i < nums1.length; i++) {
        let index = nums2.indexOf(nums1[i]);
        if (index === nums2.length - 1) {
            stack.push(-1)
        }
        else {
            for (let j = index + 1; j < nums2.length; j++) {
                if (nums2[j] > nums1[i]) {
                    stack.push(nums2[j]);
                    break;
                }
                else if (j === nums2.length - 1 && nums2[j] <= nums1[i]) {
                    stack.push(-1);
                    break;
                }
            }
        }
    }
    return stack;

};