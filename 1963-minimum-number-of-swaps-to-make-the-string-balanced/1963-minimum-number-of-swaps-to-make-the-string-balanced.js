/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
  let swaps = 0
  let openCount = 0 
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[') {
      openCount++
    } else {
      openCount--
    }
    if (openCount < 0) {
        swaps++
        openCount = 1
    }
  }
  return swaps
};

console.log(minSwaps("]][["));
console.log(minSwaps("]]][[["));
console.log(minSwaps("[]"));
console.log(minSwaps("[[[]]]"));
console.log(minSwaps("[[[[[["));
console.log(minSwaps("]]]]]]"));
console.log(minSwaps("][[]]"));
console.log(minSwaps("][[[]]"));
console.log(minSwaps("][[[[]]]"));
console.log(minSwaps("][[[[[["));
console.log(minSwaps("][[[[[[["));