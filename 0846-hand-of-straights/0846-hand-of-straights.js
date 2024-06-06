/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) {
    return false;
  }

  const map = new Map();
  hand.sort((a, b) => a - b);
  for (const num of hand) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const num of hand) {
    if (map.get(num) === 0) {
      continue;
    }

    for (let i = 0; i < groupSize; i++) {
      if ((map.get(num + i) || 0) === 0) {
        return false;
      }
      map.set(num + i, map.get(num + i) - 1);
    }
  }
  return true;
};