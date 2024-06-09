/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < word1.length; i++) {
    map1.set(word1[i], map1.has(word1[i]) ? map1.get(word1[i]) + 1 : 1);
    map2.set(word2[i], map2.has(word2[i]) ? map2.get(word2[i]) + 1 : 1);
  }
  let arr1 = [...map1].sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0));
  let arr2 = [...map2].sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0));

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i][0] !== arr2[i][0]) return false;
  }

  let arr3 = [...map1.values()].sort((a, b) => a - b);
  let arr4 = [...map2.values()].sort((a, b) => a - b);
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] !== arr4[i]) return false;
  }

  return true;
};