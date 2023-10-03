/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    let finalArray = []
    for (let i = 0; i < names.length; i++) {
        finalArray.push([names[i], heights[i]])
    }
    return finalArray.sort((a, b) => b[1] - a[1]).map(item => item[0])
};