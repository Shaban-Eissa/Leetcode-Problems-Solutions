/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let sum = 0;
  let map = new Map();
  let count = 0;
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let mod = sum % k;
    if (mod < 0) {
      mod += k;
    }
    if (map.has(mod)) {
      count += map.get(mod);
    }
    map.set(mod, map.has(mod) ? map.get(mod) + 1 : 1);
  }
  return count;
};
