/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
  let tLength = t.length;
  let j = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[j]) {
      j++;
      tLength--;
    }
  }
  return tLength;
};