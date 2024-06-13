/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  let arr = Array.from(map.keys());
  arr.sort((a, b) => b - a);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += map.get(arr[i]);
    if (count >= k) {
      return arr[i];
    }
  }
};