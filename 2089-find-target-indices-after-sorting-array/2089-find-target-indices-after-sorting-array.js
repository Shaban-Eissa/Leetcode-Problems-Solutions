/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);
  let index = binarySearch(nums, target);

  if (index === -1) {
    return [];
  }

  let res = [index];
  let l_index = index - 1; // 1
  let r_index = index + 1; // 3

  for (let i = l_index; i >= 0; i--) {
    if (nums[i] === target) {
      res.unshift(i);
    }
  }

  for (let i = r_index; i <= nums.length; i++) {
    if (nums[i] === target) {
      res.push(i);
    }
  }
  return res;
};

function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let middle = Math.floor((l + r) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (target < arr[middle]) {
      r = middle - 1;
    } else {
      l = middle + 1;
    }
  }

  return -1;
}