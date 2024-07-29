/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let map = new Map();
  nums.map((item) => {
    map.set(item, 0);
  });

  nums.map((item) => {
    map.set(item, map.get(item) + 1);
  });

  for (let [key, value] of map) {
    if (value > 1) return true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
