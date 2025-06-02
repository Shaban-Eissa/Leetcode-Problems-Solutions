/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const candies = new Array(ratings.length).fill(1);
    for(let i = 0; i < ratings.length; i++) {
        if(ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    for(let i = ratings.length - 1; i >= 0; i--) {
        if(ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    return candies.reduce((a, b) => a + b, 0);
};

console.log(candy([1,0,2]));
console.log(candy([1,2,2]));
console.log(candy([1,3,2,2,1]));
console.log(candy([1,2,87,87,87,2,1]));
console.log(candy([1,2,3,4,5,6,7,8,9,10]));
console.log(candy([10,9,8,7,6,5,4,3,2,1]));