/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let maxVowels = 0;
  let currentVowels = 0;

  for (let i = 0; i < k; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      currentVowels++;
    }
  }

  if (s.length === k) {
    return currentVowels;
  }

  maxVowels = currentVowels;

  for (let i = k; i < s.length; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      currentVowels++;
    }
    if (
      s[i - k] === "a" ||
      s[i - k] === "e" ||
      s[i - k] === "i" ||
      s[i - k] === "o" ||
      s[i - k] === "u"
    ) {
      currentVowels--;
    }
    maxVowels = Math.max(maxVowels, currentVowels);
  }

  return maxVowels;
};