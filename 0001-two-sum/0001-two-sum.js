/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numsWithIndex = nums.map((num, index) => ({ num, index }));
    numsWithIndex.sort((a, b) => a.num - b.num);

    let left = 0;
    let right = numsWithIndex.length - 1;

    while (left < right) {
        const sum = numsWithIndex[left].num + numsWithIndex[right].num;
        if (sum === target) {
            return [numsWithIndex[left].index, numsWithIndex[right].index];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
};

console.log(twoSum([3, 2, 4], 6));


