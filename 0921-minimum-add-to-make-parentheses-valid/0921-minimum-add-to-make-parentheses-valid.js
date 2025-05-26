/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  let openCount = 0
  let moves = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      openCount++
    } else if (s[i] === ")") {
      openCount--
    }
    if(openCount < 0) {
        moves++
        openCount = 0
    }
  }
  return moves + openCount
};

console.log(minAddToMakeValid("())"))
console.log(minAddToMakeValid("((("))
console.log(minAddToMakeValid("()"))
console.log(minAddToMakeValid("()))(("))
console.log(minAddToMakeValid("(()))"))
console.log(minAddToMakeValid("()()"))
console.log(minAddToMakeValid("()))"))
console.log(minAddToMakeValid("(()))"))