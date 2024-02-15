/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
      if (map[s[i]] > 1) {
        return s[i];
      }
    } else {
      map[s[i]] = 1;
    }
  }
};