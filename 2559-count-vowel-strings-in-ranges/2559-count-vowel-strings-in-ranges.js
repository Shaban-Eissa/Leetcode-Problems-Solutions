/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    let n = words.length;
    let Prefix = new Array(n + 1).fill(0);
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let i = 0; i < n; i++) {
        Prefix[i + 1] = Prefix[i];
        if (vowels.has(words[i][0]) && vowels.has(words[i][words[i].length - 1])) {
            Prefix[i + 1]++;
        }
    }

    let result = new Array(queries.length);
    for (let i = 0; i < queries.length; i++) {
        result[i] = Prefix[queries[i][1] + 1] - Prefix[queries[i][0]];
    }

    return result;
};