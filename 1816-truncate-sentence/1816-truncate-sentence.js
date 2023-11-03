/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    let str = s.split(" ")
    return str = str.slice(0, k).join(" ")
};