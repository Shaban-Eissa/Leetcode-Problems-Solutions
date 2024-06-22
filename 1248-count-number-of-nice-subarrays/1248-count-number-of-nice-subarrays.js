/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let countOdd = 0;
    let l = 0;
    let m = 0;
    let result = 0;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] % 2 !== 0) {
            countOdd++;
        }
        
        while (countOdd > k) {
            if (nums[l] % 2 !== 0) {
                countOdd--;
            }
            l++;
           	m = l;
        }
        if (countOdd === k) {
        	while(nums[m] % 2 == 0){
        	 m++
        	}

             result += (m-l)+1;
        }
       
    }
    return result;
};