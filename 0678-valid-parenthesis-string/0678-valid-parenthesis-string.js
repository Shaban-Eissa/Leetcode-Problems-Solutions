/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let minOpen = 0
  let maxOpen = 0
  for(let i = 0; i < s.length; i++) {
    if(s[i] === "(") {
      minOpen++
      maxOpen++
    } else if(s[i] === ")") {
      minOpen--
      maxOpen--
    } else {
      minOpen--
      maxOpen++
    }
    if(maxOpen < 0) {
      return false
    }
    if(minOpen < 0) {
      minOpen = 0
    }
  }
  return minOpen === 0
};

console.log(checkValidString("()"))
console.log(checkValidString("(*)"))
console.log(checkValidString("(*))"))
