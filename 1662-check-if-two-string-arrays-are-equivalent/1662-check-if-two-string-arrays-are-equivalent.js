/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    var words1 = []
  var words2 = []

  for(let i = 0 ; i < word1.length ; i++) {
    words1.push(word1[i])
  }
  for(let i = 0 ; i < word2.length ; i++) {
    words2.push(word2[i])
  }

  if(words1.join('') === words2.join('')) {
    return true
  }
  else {
    return false
  }

};