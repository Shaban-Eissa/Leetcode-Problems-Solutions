/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let res = 0;
  const gridSize = grid.length;
  const rows = new Map(),
    columns = new Map();

  for (let i = 0; i < gridSize; ++i) {
    rows.set(i, grid[i].join(","));

    let column = [];
    for (let j = 0; j < gridSize; ++j) column.push(grid[j][i]);
    columns.set(i, column.join(","));
  }

  for (let [index, row] of rows) {
    for (let [index, column] of columns) res = row === column ? res + 1 : res;
  }

  return res;
};