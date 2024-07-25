/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  let n = nums.length;
  let middle = Math.floor(n / 2);
  if (n < 2) return nums;
  let left = nums.slice(0, middle);
  let right = nums.slice(middle);
  return merge(sortArray(left), sortArray(right));
};

const merge = (left, right) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
};

console.log(sortArray([5, 2, 3, 1])); // [1,2,3,5]
