/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
 var longestSubarray = function(nums, limit) {

    const minQueue =  new PriorityQueue({ compare : (i1, i2) => nums[i1] - nums[i2]});
    const maxQueue =  new PriorityQueue({ compare : (i1, i2) => nums[i2] - nums[i1]});

    let i = 0, j = 0, maxLen = 0;
    
    while(j < nums.length) {

        minQueue.enqueue(j);
        maxQueue.enqueue(j);

        while(nums[maxQueue.front()] - nums[minQueue.front()] > limit) {
            i++;
            while(maxQueue.front() < i) maxQueue.dequeue();
            while(minQueue.front() < i) minQueue.dequeue();        
        }

        maxLen = Math.max(maxLen, j - i + 1);
        j++;
    }

    return maxLen;
};