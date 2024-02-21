/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let cache = {};
  return (function minCost(n) {
    if (n in cache) {
      return cache[n];
    }
    if (n <= 1) {
      return cost[n];
    }
    cache[n] = Math.min(minCost(n - 1), minCost(n - 2)) + (cost[n] || 0);
    return cache[n];
  })(cost.length);
};