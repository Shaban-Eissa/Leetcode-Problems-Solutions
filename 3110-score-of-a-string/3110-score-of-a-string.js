/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  let score = 0;
  let ArrayOfAscii = s.split("").map((char) => char.charCodeAt(0));

  for (let i = 0; i < ArrayOfAscii.length; i++) {
    score += Math.abs(ArrayOfAscii[i] - ArrayOfAscii[i + 1]);
    if (i === ArrayOfAscii.length - 2) break;
  }
  return score;
};