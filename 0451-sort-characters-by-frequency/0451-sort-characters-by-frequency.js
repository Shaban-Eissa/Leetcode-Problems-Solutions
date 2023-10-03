/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        }
        else {
            map.set(s[i], 1)
        }
    }
    return [...map].sort((a, b) => b[1] - a[1]).flatMap(x => x = x[1] === 1 ? x[0] : (new String(x[0])).repeat(x[1])).join("")
};