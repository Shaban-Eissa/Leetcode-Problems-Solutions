/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
    const charIndices = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!charIndices.has(s[i])) {
            charIndices.set(s[i], []);
        }
        charIndices.get(s[i]).push(i);
    }

    let count = 0;
    for (const [char, indices] of charIndices) {
        const start = indices[0];
        const end = indices[indices.length - 1];
        if (end - start <= 1) {
            continue;
        }

        const seen = new Set();
        for (let i = start + 1; i < end; i++) {
            seen.add(s[i]);
        }
        count += seen.size;
    }

    return count;
};