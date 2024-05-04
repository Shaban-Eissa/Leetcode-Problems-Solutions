/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    let ArrayOfSubsequence = [];

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
            ArrayOfSubsequence.push(t[j]);
        }
        j++;
    }
    return ArrayOfSubsequence.join("") === s ? true : false;
};