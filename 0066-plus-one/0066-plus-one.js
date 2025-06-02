/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let number = BigInt(digits.join('')) + BigInt(1)
    return number.toString().split('').map(Number)
};

console.log(plusOne([1,2,3]))
console.log(plusOne([4,3,2,1]))