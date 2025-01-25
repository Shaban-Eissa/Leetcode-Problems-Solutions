/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
    nums.sort((a, b) => a - b);
    let res = new Set();
    while (nums.length > 0) {
        res.add((nums.pop() + nums.shift()) / 2);
    }
    return res.size;
};

console.log(distinctAverages([4, 1, 4, 0, 3, 5], 2))