/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
const maximumValueSum = (nums, k, edges) => {
    let totalSum = 0;
    let positiveChangeCount = 0;
    let smallestPositiveChange = Infinity;
    let largestNegativeChange = -Infinity;

    for (let nodeValue of nums) {
        let nodeValueAfterXor = nodeValue ^ k;
        totalSum += nodeValue;
        let netChange = nodeValueAfterXor - nodeValue;

        if (netChange > 0) {
            smallestPositiveChange = Math.min(smallestPositiveChange, netChange);
            totalSum += netChange;
            positiveChangeCount += 1;
        } else {
            largestNegativeChange = Math.max(largestNegativeChange, netChange);
        }
    }
   
    return positiveChangeCount % 2 === 0
        ? totalSum
        : Math.max(totalSum - smallestPositiveChange, totalSum + largestNegativeChange);
};