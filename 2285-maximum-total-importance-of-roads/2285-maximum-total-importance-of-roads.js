/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const maximumImportance = (n, roads) => {
    return (
        roads
            .reduce((res, [a, b]) => (res[a]++, res[b]++, res), Array(n).fill(0))
            .sort((a, b) => a - b)
            .reduce((res, num, idx) => res + num * (idx + 1), 0)
    );
};