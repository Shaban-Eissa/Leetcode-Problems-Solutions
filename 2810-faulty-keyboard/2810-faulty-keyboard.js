/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
   let finalString = [];
   for(let i = 0 ; i < s.length ; i++){
    if(s[i] === 'i') {
        finalString.reverse()
        continue
    } 
    finalString.push(s[i]);
   }
    return finalString.join('');
};