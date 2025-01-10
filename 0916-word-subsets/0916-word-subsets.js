/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = (
    words1,
    words2,
    counter = _.mergeWith(
        {},
        ...words2.map(word => _.countBy(word)),
        (a, b) => a > b ? a : b
    )
) => words1.filter(word => (
    word = _.countBy(word),
    _.keys(counter).every(key => word[key] >= counter[key])
))