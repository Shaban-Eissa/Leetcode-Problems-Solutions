/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let result = 0;
  let freq = {};

  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]]++;
    } else {
      freq[arr[i]] = 1;
    }
  }

  for (let [key, value] of Object.entries(freq)) {
    if (Number(key) === value) {
      result = value;
    }
  }
  return result > 0 ? result : -1;
};