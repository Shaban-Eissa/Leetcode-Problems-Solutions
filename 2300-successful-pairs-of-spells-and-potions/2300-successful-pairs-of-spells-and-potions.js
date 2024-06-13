/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);
  const ans = [];
  for (const spell of spells) {
    const rel = success / spell;
    let left = 0,
      right = potions.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (potions[mid] < rel) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    ans.push(potions.length - left);
  }
  return ans;
};

console.log(successfulPairs([1, 2, 3], [1, 2, 3, 4, 5], 6));