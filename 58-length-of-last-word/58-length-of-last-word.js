/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var copy = s.trim().split(/\s+/);

  return copy[copy.length-1].length
};