/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    let result = new Set()
    words.map(word => {
        words.map(w => {
            if (word !== w && w.includes(word)) {
                result.add(word)
            }
        })
    })
    return result.size ? Array.from(result) : []
};
