/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const memo = new Map();
  const dfs = (start) => {
    if (memo.has(start)) {
      return memo.get(start);
    }
    if (start === s.length) {
      return [""];
    }
    const res = [];
    for (let end = start + 1; end <= s.length; end++) {
      const word = s.slice(start, end);
      if (wordSet.has(word)) {
        const list = dfs(end);
        for (let next of list) {
          res.push(word + (next ? " " + next : ""));
        }
      }
    }
    memo.set(start, res);
    return res;
  };
  return dfs(0);
};