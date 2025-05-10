/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n === 0) return false;
    if(n === 1) return true;
    if(n < 0) return false;
    return isPowerOfFour(n / 4);
}

console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(1));
console.log(isPowerOfFour(0));
console.log(isPowerOfFour(-1));

