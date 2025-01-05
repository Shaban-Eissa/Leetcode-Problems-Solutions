/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
    const n = s.length;
    const shiftEffect = new Array(n + 1).fill(0);

    for (const [start, end, direction] of shifts) {
        if (direction === 1) {
            shiftEffect[start] += 1;
            shiftEffect[end + 1] -= 1;
        } else {
            shiftEffect[start] -= 1;
            shiftEffect[end + 1] += 1;
        }
    }

    for (let i = 1; i < n; i++) {
        shiftEffect[i] += shiftEffect[i - 1];
    }

    const result = [];
    for (let i = 0; i < n; i++) {
        const netShift = shiftEffect[i] % 26;
        const newChar = String.fromCharCode(
            (s.charCodeAt(i) - 97 + netShift + 26) % 26 + 97
        );
        result.push(newChar);
    }

    return result.join('');
};