/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let finalString = [];
    finalString = s.split(" ")
    for(let i = 0; i < finalString.length; i++){
        if(finalString[i] === ""){
            finalString.splice(i, 1)
            i--
        }
    }
    finalString = finalString.reverse();
    return finalString.join(" ")
};