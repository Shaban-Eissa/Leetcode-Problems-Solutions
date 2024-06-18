/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    for (let a = 0; a * a <= c; a++) {
        const b = Math.sqrt(c - a*a);
        if (Math.floor(b) === b) return true;
    }
    return false;
}