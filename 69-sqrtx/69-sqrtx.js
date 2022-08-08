/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
      if (x == 0 || x == 1) return x;

  var currIndex = 1;
  var sqrt = 1;

  while (sqrt <= x) {
    currIndex += 1;
    sqrt = currIndex * currIndex;
  }

  return currIndex - 1;
};