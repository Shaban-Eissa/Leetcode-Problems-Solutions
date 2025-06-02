/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
  let length = 0 
  for(let i = 1; i < arr.length - 1; i++) {
    if(arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      let left = i - 1
      let right = i + 1
      while(left > 0 && arr[left] > arr[left - 1]) {
        left--
      }
      while(right < arr.length && arr[right] > arr[right + 1]) {
        right++
      }
      length = Math.max(length, right - left + 1)
    }
  }
  return length
};

console.log(longestMountain([2,1,4,7,3,2,5]))
console.log(longestMountain([2,2,2]))
console.log(longestMountain([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(longestMountain([0,3,2,1]))