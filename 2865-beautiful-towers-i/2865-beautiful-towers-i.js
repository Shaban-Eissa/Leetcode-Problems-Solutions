/**
 * @param {number[]} heights
 * @return {number}
 */
var maximumSumOfHeights = function(heights) {
    const totalTowers = heights.length;
    let maximumSum = 0;

    for (let peakIndex = 0; peakIndex < totalTowers; peakIndex++) {
        const towerHeights = [...heights];
        
        for (let leftIndex = peakIndex - 1; leftIndex >= 0; leftIndex--) {
            const currentHeight = towerHeights[leftIndex];
            const nextHeight = towerHeights[leftIndex + 1];

            if (currentHeight > nextHeight) {
                towerHeights[leftIndex] = nextHeight;
            }
        }
       
        for (let rightIndex = peakIndex + 1; rightIndex < totalTowers; rightIndex++) {
            const currentHeight = towerHeights[rightIndex];
            const previousHeight = towerHeights[rightIndex - 1];

            if (currentHeight > previousHeight) {
                towerHeights[rightIndex] = previousHeight;
            }
        }

        const currentSum = towerHeights.reduce((sum, height) => sum + height, 0);
        maximumSum = Math.max(maximumSum, currentSum);
    }

    return maximumSum;
};
console.log(maximumSumOfHeights([5,4,3,2,1])); 
