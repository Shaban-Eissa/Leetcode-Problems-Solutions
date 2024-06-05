/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let result = [];
  let firstWord = words[0];
  let firstWordChars = {};

  for (let i = 0; i < firstWord.length; i++) {
    if (firstWordChars[firstWord[i]]) {
      firstWordChars[firstWord[i]]++;
    } else {
      firstWordChars[firstWord[i]] = 1;
    }
  }

  for (let i = 1; i < words.length; i++) {
    let currentWord = words[i];
    let currentWordChars = {};

    for (let j = 0; j < currentWord.length; j++) {
      if (currentWordChars[currentWord[j]]) {
        currentWordChars[currentWord[j]]++;
      } else {
        currentWordChars[currentWord[j]] = 1;
      }
    }

    for (let char in firstWordChars) {
      if (currentWordChars[char]) {
        firstWordChars[char] = Math.min(
          firstWordChars[char],
          currentWordChars[char]
        );
      } else {
        delete firstWordChars[char];
      }
    }
  }

  for (let char in firstWordChars) {
    for (let i = 0; i < firstWordChars[char]; i++) {
      result.push(char);
    }
  }

  return result;
};