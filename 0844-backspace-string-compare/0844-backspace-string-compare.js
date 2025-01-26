/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    function processString(str) {
        let result = []
        for (let char of str) {
            if (char === '#') {
                result.pop()
            }
            else {
                result.push(char)
            }
        }
        return result.join('')
    }

    return processString(s) === processString(t);
};