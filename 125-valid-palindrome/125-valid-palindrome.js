/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var copy = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  var reversedString = copy.split("").reverse().join("");

  return reversedString === copy;
};