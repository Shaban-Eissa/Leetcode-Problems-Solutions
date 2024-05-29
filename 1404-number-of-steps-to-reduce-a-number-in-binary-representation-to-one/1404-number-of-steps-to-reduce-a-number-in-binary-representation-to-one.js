/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  let countSteps = 0,
    n = BigInt("0b" + s);

  while (n != 1n) {
    n = n % 2n == 1n ? n + 1n : n / 2n;
    countSteps++;
  }
  return countSteps;
};