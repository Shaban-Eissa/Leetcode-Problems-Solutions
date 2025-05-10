/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n === 0) return false;
    if(n === 1) return true;
    if(n < 0) return false;
    return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(-1));