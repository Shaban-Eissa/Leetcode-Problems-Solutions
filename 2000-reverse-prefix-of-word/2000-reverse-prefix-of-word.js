/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const indexOfCh = word.indexOf(ch);
    return indexOfCh === -1 ? word : word.slice(0, indexOfCh + 1).split("").reverse().join("") + word.slice(indexOfCh + 1);
    
};