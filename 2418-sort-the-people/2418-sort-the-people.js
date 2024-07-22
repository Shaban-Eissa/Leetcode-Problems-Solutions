/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let result = [];
  names.map((name, index) => {
    result.push([name, heights[index]]);
  });

  return result
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] < b[0] ? 1 : -1;
      }
      return a[1] < b[1] ? 1 : -1;
    })
    .map((item) => item[0]);
};
