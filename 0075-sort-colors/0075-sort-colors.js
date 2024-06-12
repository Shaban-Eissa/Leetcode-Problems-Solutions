/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
   
    let n  = nums.length, zero = one = two = temp = 0;
    for(let i = 0; i<n; i++){
        if(nums[i]==0) zero++
        if(nums[i]==1) one++
        if(nums[i]==2) two++
    }
    while(zero-- > 0) nums[temp++]=0;
    while(one-- > 0)  nums[temp++]=1;
    while(two-- > 0)  nums[temp++]=2;
          
    return nums
};