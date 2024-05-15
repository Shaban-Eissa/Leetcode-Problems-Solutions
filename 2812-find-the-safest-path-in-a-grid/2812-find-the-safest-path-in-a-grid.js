/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
    const n = grid.length, dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const nearestThief = getNearestThiefDistance(grid, n, dirs);

    let lSafeFactor = 0, rSafeFactor = n - 1;
    while (lSafeFactor < rSafeFactor) {
        const midSafeFactor = (lSafeFactor + rSafeFactor + 1) >> 1;
        if (isSafeFactorPossible(midSafeFactor, grid, n, nearestThief, dirs)) 
            lSafeFactor = midSafeFactor;
        else rSafeFactor = midSafeFactor - 1;
    }

    return lSafeFactor
};

const isSafeFactorPossible = (safeFactor, grid, n, nearestThief, dirs) => {
    const visited = Array.from({ length: n }, () => Array(n).fill(-1));
    let cur = [[0, 0]];

    if (nearestThief[0][0] < safeFactor) return false;
    visited[0][0] = 0;

    for (let next = []; cur.length > 0; cur = next, next = []) {
        for (const [x, y] of cur) {
            for (const [xDir, yDir] of dirs) {
                const newX = x + xDir, newY = y + yDir;
                if (grid[newX]?.[newY] === 0 &&
                    visited[newX][newY] === -1 &&
                    nearestThief[newX][newY] >= safeFactor
                ) {
                    if (newX == n - 1 && newY == n - 1) return true;
                    visited[newX][newY] = 0;
                    next.push([newX, newY]);
                }  
            }
        }
    }

    return false;
};

const getNearestThiefDistance = (grid, n, dirs) => {
    const nearestThief = Array.from({ length: n },
        () => Array(n).fill(Infinity));
    let cur = []

    for (let i = 0; i < grid.length; i++)
        for (let j = 0; j < grid.length; j++)
            if (grid[i][j] === 1)
                cur.push([i, j]), nearestThief[i][j] = 0;

    for (let next = []; cur.length > 0; cur = next, next = []) {
        for (const [x, y] of cur) {
            for (const [xDir, yDir] of dirs) {
                const newX = x + xDir, newY = y + yDir;
                if (grid[newX]?.[newY] === 0 &&
                    nearestThief[x][y] + 1 < nearestThief[newX][newY]
                ) {
                    nearestThief[newX][newY] = nearestThief[x][y] + 1;
                    next.push([newX, newY]);
                }
            }
        }
    }

    return nearestThief
};