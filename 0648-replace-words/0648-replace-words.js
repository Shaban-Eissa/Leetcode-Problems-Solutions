/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  let rootSet = new Set(dictionary);
  let words = sentence.split(" ");
  let result = [];
  for (let word of words) {
    let prefix = "";
    for (let i = 1; i <= word.length; i++) {
      prefix = word.slice(0, i);
      if (rootSet.has(prefix)) {
        break;
      }
    }
    result.push(prefix);
  }
  return result.join(" ");
};