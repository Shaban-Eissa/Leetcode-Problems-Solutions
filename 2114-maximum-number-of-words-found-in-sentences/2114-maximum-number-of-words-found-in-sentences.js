/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    var copy = [];
 
  for (let i = 0; i < sentences.length; i++) {
    var sentence = [];
    sentence.push(...sentences[i].split(" "));
    copy.push(sentence.length);
  }

  return Math.max(...copy);
};