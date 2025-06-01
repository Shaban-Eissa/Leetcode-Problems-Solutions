/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a' || s[i] === 'b') {
            stack.push(s[i])
        } else if (stack.length >= 2) {
            if (stack[stack.length - 1] === 'b' && stack[stack.length - 2] === 'a') {
                stack.pop()
                stack.pop()
            } else {
                return false
            }
        } else {
            return false
        }
    }
    return stack.length === 0
};

console.log(isValid("abcabcababcc"))
console.log(isValid("aabcbc"))
console.log(isValid("abcabcababcc"))
console.log(isValid("abccba"))
console.log(isValid("cababc"))