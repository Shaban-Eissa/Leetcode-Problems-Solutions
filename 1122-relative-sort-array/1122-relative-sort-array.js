/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let relativeArray = [];
  let notRelativeArray = [];
  for (let i = 0; i < arr2.length; i++) {
    let count = arr1.filter((num) => num === arr2[i]).length;
    relativeArray = relativeArray.concat(Array(count).fill(arr2[i]));
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      notRelativeArray.push(arr1[i]);
    }
  }
  return relativeArray.concat(notRelativeArray.sort((a, b) => a - b));
};