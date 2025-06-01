/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    if (n === 0) return 1;
    if (n > 3 * limit) return 0;
    
    let count = 0;
    
    for (let i = 0; i <= Math.min(n, limit); i++) {
        for (let j = 0; j <= Math.min(n - i, limit); j++) {
            let k = n - i - j;
            if (k >= 0 && k <= limit) {
                count++;
            }
        }
    }
    
    return count;
};

console.log(distributeCandies(10, 3))
console.log(distributeCandies(5, 10))
console.log(distributeCandies(1, 1))
console.log(distributeCandies(10, 10))
console.log(distributeCandies(10, 1))