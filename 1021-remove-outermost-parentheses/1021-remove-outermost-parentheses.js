/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack = []; 
   let result = '';

   for(let i = 0; i < s.length; i++) {
    if(s[i] === '(') {
        if(stack.length > 0) {
            result += s[i];
        }
        stack.push(s[i]);
    }
    else if(s[i] === ')') {
        stack.pop();
        if(stack.length > 0) {
            result += s[i];
        }
    }
}
   return result;
};

console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));
console.log(removeOuterParentheses("()()"));
console.log(removeOuterParentheses("((()))"));
console.log(removeOuterParentheses("(())"));
console.log(removeOuterParentheses("((())())"));
console.log(removeOuterParentheses("((())())(())"));
console.log(removeOuterParentheses("((())())(())"));
console.log(removeOuterParentheses("((())())(())"));
console.log(removeOuterParentheses("((())())(())"));
console.log(removeOuterParentheses("((())())(())"));

