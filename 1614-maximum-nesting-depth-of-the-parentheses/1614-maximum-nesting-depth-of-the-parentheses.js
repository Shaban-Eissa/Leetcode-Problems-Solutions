/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = [];
    let maxDepth = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
            maxDepth = Math.max(maxDepth, stack.length);
        } else if (s[i] === ')') {
            stack.pop();
            maxDepth = Math.max(maxDepth, stack.length);
        }
    }
    return maxDepth;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"))
console.log(maxDepth("(1)+((2))+(((3)))"))
console.log(maxDepth("1+(2*3)/(2-1)"))
console.log(maxDepth("1"))
console.log(maxDepth("()"))
console.log(maxDepth("(())"))
console.log(maxDepth("((()))"))
console.log(maxDepth("((())())"))
console.log(maxDepth("((())(()))"))

