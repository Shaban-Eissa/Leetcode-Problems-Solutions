/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {

    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    return [...map.values()].every((val, i, arr) => val === arr[0]);
};