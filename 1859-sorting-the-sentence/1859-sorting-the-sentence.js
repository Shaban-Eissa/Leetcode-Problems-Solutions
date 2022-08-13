/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    s = s.split(" ");
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let word = s[i];
    arr[parseInt(word[word.length - 1]) - 1] = word.slice(0, -1);
  }
  return arr.join(" ");
};