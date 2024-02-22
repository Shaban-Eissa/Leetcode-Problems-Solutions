/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  let nums1Set = new Set(nums1);
  let nums2Set = new Set(nums2);
  let nums3Set = new Set(nums3);

  let result = new Set();
  for (let num of nums1Set) {
    if (nums2Set.has(num) || nums3Set.has(num)) {
      result.add(num);
    }
  }
  for (let num of nums2Set) {
    if (nums1Set.has(num) || nums3Set.has(num)) {
      result.add(num);
    }
  }

  for (let num of nums3Set) {
    if (nums1Set.has(num) || nums2Set.has(num)) {
      result.add(num);
    }
  }

  return Array.from(result);
};