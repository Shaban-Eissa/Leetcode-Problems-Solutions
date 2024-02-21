/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let cache = {};
  return (function trib(n) {
    if (n in cache) {
      return cache[n];
    }
    if (n <= 0) {
      return 0;
    }
    if (n <= 2) {
      return 1;
    }
    cache[n] = trib(n - 1) + trib(n - 2) + trib(n - 3);
    return cache[n];
  })(n);
};