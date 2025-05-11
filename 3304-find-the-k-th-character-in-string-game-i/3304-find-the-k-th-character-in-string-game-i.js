/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    if (k === 1) return 'a';
    let len = 1; 
    let operations = 0;
    while (len < k) {
        len = len * 2; 
        operations++;
    }
    if (k > len/2) {
        let firstHalfPos = k - len/2;
        let char = kthCharacter(firstHalfPos);
        return char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
    }
    return kthCharacter(k);
};

console.log(kthCharacter(1)); // a
console.log(kthCharacter(2)); // b 
console.log(kthCharacter(3)); // c
console.log(kthCharacter(4)); // d
console.log(kthCharacter(5)); // e

