/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i].length === words[j].length) {
        let word1 = words[i].split("").sort().join("");
        let word2 = words[j].split("").sort().join("");
        if (word1 === word2) {
          count++;
        }
      }
    }
  }
  return count;
};