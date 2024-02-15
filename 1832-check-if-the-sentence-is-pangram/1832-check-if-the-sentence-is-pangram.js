/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let freq = {};
  for (let character of sentence) {
    freq[character] = (freq[character] || 0) + 1;
  }
  return Object.keys(freq).length === 26;
};