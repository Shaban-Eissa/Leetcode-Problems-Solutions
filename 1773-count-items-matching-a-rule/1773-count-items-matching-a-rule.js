/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
     var count = 0;
  for (let i = 0; i < items.length; i++) {
    if (ruleKey === "type" && items[i][0] === ruleValue) {
      count += 1;
    } else if (ruleKey === "color" && items[i][1] === ruleValue) {
      count += 1;
    } else if (ruleKey === "name" && items[i][2] === ruleValue) {
      count += 1;
    }
  }
  return count;
};