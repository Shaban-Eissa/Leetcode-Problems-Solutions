/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const ArrayOfVowels = s.split('').filter(char => 'aeiouAEIOU'.includes(char))
    console.log(ArrayOfVowels)
    return s.split('').map(char => 'aeiouAEIOU'.includes(char) ? ArrayOfVowels.pop() : char).join('')
};