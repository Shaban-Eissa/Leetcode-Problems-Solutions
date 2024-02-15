/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  let acronym = "";
  for (let i = 0; i < words.length; i++) {
    acronym += words[i][0];
  }
  return acronym === s;
};