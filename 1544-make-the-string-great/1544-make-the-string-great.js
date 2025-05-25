/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  let stack = []
  
  for(let i = 0; i < s.length; i++) {
    if(stack.length > 0 && Math.abs(stack[stack.length - 1].charCodeAt() - s[i].charCodeAt()) === 32) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  
  return stack.join('')
};

console.log(makeGood("abBA"))
console.log(makeGood("abBAc"))
console.log(makeGood("aabAAB"))
console.log(makeGood("c"))
console.log(makeGood("a"))
console.log(makeGood("aA"))
console.log(makeGood("aAaA"))

