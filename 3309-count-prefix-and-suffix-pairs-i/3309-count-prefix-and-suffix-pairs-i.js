/**
 * @param {string[]} words
 * @return {number}
 */
const countPrefixSuffixPairs = (words) => {
    let [result, n] = [0, words.length];

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            if (words[i].startsWith(words[j]) && words[i].endsWith(words[j]))
                ++result;
        }
    }
    return result;
};