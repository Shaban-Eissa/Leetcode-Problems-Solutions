/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
    if (s.length % 2 !== 0) {
        return false;
    }

    let open = 0, buffer = 0;
    for (let i = 0; i < s.length; i++) {
        if (locked[i] === '0') {
            buffer++;
        } else if (s[i] === '(') {
            open++;
        } else {
            if (open > 0) {
                open--;
            } else if (buffer > 0) {
                buffer--;
            } else {
                return false;
            }
        }
    }

    let close = 0;
    buffer = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (locked[i] === '0') {
            buffer++;
        } else if (s[i] === ')') {
            close++;
        } else {
            if (close > 0) {
                close--;
            } else if (buffer > 0) {
                buffer--;
            } else {
                return false;
            }
        }
    }

    return true;
};