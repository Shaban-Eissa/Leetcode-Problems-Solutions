/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !== 0) return false;
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        const c = s[i];
        if(c === '(' || c === '[' || c === '{') {
            stack.push(c);
        } else {
            const t = stack.pop();
            if(t === '(' && c !== ')' || t === '[' && c !== ']' || t === '{' && c !== '}') {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid(""));
console.log(isValid("(("));
console.log(isValid(")"));
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
