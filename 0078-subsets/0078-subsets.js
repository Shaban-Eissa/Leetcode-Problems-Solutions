/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  if (nums.length === 0) return [[]];
  const result = [];
  const dfs = (index, path) => {
    result.push(path);
    for (let i = index; i < nums.length; i++) {
      dfs(i + 1, [...path, nums[i]]);
    }
  };
  dfs(0, []);
  return result;
};
