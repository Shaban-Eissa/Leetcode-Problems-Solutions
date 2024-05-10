/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  let fractions = [],
    answer = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      fractions.push(arr[i] / arr[j]);
    }
  }
  fractions.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] / arr[j] == fractions[k - 1]) {
        answer[0] = arr[i];
        answer[1] = arr[j];
        break;
      }
    }
  }
  return answer;
};