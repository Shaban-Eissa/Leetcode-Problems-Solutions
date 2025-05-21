/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  let stack = []
  for(let i = 0; i < s.length; i++) {
    if(stack.length > 0) {
        if(stack[stack.length - 1] === s[i]) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    } else {
        stack.push(s[i])
    }
  }  
  return stack.join('')
};

console.log(removeDuplicates('abbaca'))
console.log(removeDuplicates('azxxzy'))
console.log(removeDuplicates('a'))
console.log(removeDuplicates('aa'))
console.log(removeDuplicates('aaa'))
console.log(removeDuplicates('aaaa'))
console.log(removeDuplicates('aaaaa'))
console.log(removeDuplicates('aaaaaa'))

