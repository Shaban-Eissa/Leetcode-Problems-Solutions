/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = new Map();
  let res = [];
  for (let num of nums1) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  }
  for (let num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      res.push(num);
      map.set(num, map.get(num) - 1);
    }
  }
  return res;
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4,9]
