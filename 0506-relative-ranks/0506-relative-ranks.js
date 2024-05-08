/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let arr = [...score];
  arr.sort((a, b) => b - a);
  let res = [];
  for (let i = 0; i < score.length; i++) {
    let index = arr.indexOf(score[i]);
    if (index === 0) {
      res.push("Gold Medal");
    } else if (index === 1) {
      res.push("Silver Medal");
    } else if (index === 2) {
      res.push("Bronze Medal");
    } else {
      res.push((index + 1).toString());
    }
  }
  return res;
};