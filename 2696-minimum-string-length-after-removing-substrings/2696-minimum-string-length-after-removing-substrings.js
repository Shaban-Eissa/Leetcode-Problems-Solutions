/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
  let stack = []
  let minimumNumberOfOperations = 0
  for(let i = 0; i < s.length; i++) {
    if(s[i] === 'A' && s[i + 1] === 'B') {
      minimumNumberOfOperations++
    }
    if(s[i] === 'C' && s[i + 1] === 'D') {
      minimumNumberOfOperations++
    }
  }
  return minimumNumberOfOperations > 0 ? minimumNumberOfOperations : s.length
};

console.log(minLength("ABFCACDB"))
console.log(minLength("ACBBD"))
console.log(minLength("AABB"))
console.log(minLength("ABCD"))
console.log(minLength("ACBDBDCA"))
console.log(minLength("ABCCBC"))
