/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    let str = title.toLowerCase().split(' ')
    let newWords = []
    for (let i = 0; i < str.length; i++) {
        if (str[i].length >= 3) {
            let temp = str[i].split('')
            temp[0] = temp[0].toUpperCase()
            temp = temp.join('')
            newWords.push(temp)
        }
        else {
            newWords.push(str[i])
        }
    }
    return newWords.join(' ')
};