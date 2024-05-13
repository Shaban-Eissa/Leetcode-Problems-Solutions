/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let score = 0;

    for (let i = 0; i < m; i++) {  
        if (grid[i][0] === 0) { 
            for (let j = 0; j < n; j++) {
                grid[i][j] = (grid[i][j] === 1) ? 0 : 1;
            }
        }
    }

    for (let j = 0; j < n; j++) {
        let count1 = 0;
        for (let i = 0; i < m; i++) {
            if (grid[i][j] === 1)
                count1++;
        }

        if (count1 < Math.ceil(m / 2)) {
            for (let i = 0; i < m; i++) {
                grid[i][j] = (grid[i][j] === 1) ? 0 : 1;
            }
        }
    }

    for (let i = 0; i < m; i++) {
        let bin = grid[i].join('');
        score += parseInt(bin, 2);
    }

    return score;
};