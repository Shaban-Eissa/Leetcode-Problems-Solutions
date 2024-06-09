/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canEatAll(piles, h, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

const canEatAll = (piles, h, speed) => {
  let time = 0;
  for (let pile of piles) {
    time += Math.ceil(pile / speed);
  }
  return time <= h;
};