/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  let max = 0;
  let cost = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    cost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
    while (cost > maxCost) {
      cost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};
