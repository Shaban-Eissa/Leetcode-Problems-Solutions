/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
    if (s.length < k) return false;
    const count = Array(26).fill(0);
    for (const c of s) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    const oddCount = count.filter(val => val % 2 !== 0).length;
    return oddCount <= k;
};