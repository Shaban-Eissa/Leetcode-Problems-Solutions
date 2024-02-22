/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sArray = s.split("").sort().join("");
  let tArray = t.split("").sort().join("");

  return sArray === tArray;
};