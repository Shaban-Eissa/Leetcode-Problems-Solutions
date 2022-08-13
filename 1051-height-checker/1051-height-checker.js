/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    var copy = [...heights]
  copy.sort((a,b) => a-b)

  var count = 0
  for(let i = 0 ; i < heights.length ; i++) {
    if(heights[i] !== copy[i]) {
      count += 1
    }
  }
  return count
};