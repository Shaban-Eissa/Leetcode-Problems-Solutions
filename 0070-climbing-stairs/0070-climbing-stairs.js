/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let cache = {};
  return (function fib(n) {
    if (n in cache) {
      return cache[n];
    }
    if (n <= 2) {
      return n;
    }
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  })(n);
};